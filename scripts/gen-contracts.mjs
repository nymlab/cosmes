// @ts-check

/**
 * This script generates the src/contracts directory from the schema files in the
 * repos specified in `REPOS`. It uses `buf` to generate TS files from the proto
 * files, and then generates an `index.ts` file to re-export the generated code.
 */

import { default as codegen } from "@cosmwasm/ts-codegen";
import fs from "fs";
import { fileURLToPath } from "url";
import tiged from "tiged";
import { mkdirSync, rmSync } from "fs";
import { dirname, join } from "path";

/**
 * @typedef Contract
 * @type {object}
 * @property {string} repo - Git repo and subdir (schema) to clone
 * @property {string} name - name of the contract to be used in types, clients, messages
 */

/**
 * Must add git full hash here for version control
 * @type {Contract[]}
 */
const CONTRACTS = [
  {
    repo: "nymlab/vectis-contracts/proxy/schema#55b3a689cd4156ad9d0c6307432859e5b34672f5",
    name: "Proxy",
  },
  {
    repo: "nymlab/vectis-contracts/plugin_registry/schema#55b3a689cd4156ad9d0c6307432859e5b34672f5",
    name: "PluginRegistry",
  },
  {
    repo: "nymlab/vectis-authenticators/webauthn/schema#8f6eb5de6f3d4f602000ca422a7e4c70c0cca406",
    name: "Webauthn",
  },
  {
    repo: "nymlab/protocol-contracts/contracts/sdjwt_verifier/schema#83a5f9cc27d99a1cc7a018cc8905fff77e77fc0a",
    name: "SdjwtVerifier",
  },
];

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTRACT_DIR = join(__dirname, "..", "src", "contracts");
const TMP_DIR = join(CONTRACT_DIR, ".tmp");

console.log("Initialising directories...");
{
  rmSync(TMP_DIR, { recursive: true, force: true });
  rmSync(CONTRACT_DIR, { recursive: true, force: true });
  mkdirSync(CONTRACT_DIR);
  mkdirSync(TMP_DIR);
}

console.log("Cloning required JSON schema files...");
{
  await Promise.all(
    CONTRACTS.map(({ repo, name }) =>
      tiged(repo, { mode: "git" }).clone(join(TMP_DIR, name))
    )
  );
}

console.log("Generating TS files from JSON schema files...");
{
  await codegen.default({
    contracts: CONTRACTS.map(({ name }) => ({
      name,
      dir: join(TMP_DIR, name),
    })),
    outPath: CONTRACT_DIR,
    options: {
      bundle: {
        enabled: false,
      },
      client: {
        noImplicitOverride: true,
      },
      messageBuilder: {
        enabled: true,
      },
    },
  });
}

console.log("Organising output files");
{
  const generationTypes = ["type", "message"];
  const files = fs.readdirSync(CONTRACT_DIR).filter((f) => f != ".tmp");

  generationTypes.map((t) => mkdirSync(join(CONTRACT_DIR, t.concat("s"))));

  for (const file of files) {
    if (file.includes("types")) {
      fs.renameSync(
        join(CONTRACT_DIR, file),
        join(CONTRACT_DIR, "types", file)
      );
    }
    if (file.includes("message-builder")) updateMessageFileType(file);
    // We are not using cosmJS clients
    if (file.includes("client")) fs.rmSync(join(CONTRACT_DIR, file));
  }

  // Create index.ts files in  messages/, types/
  for (const type of generationTypes) {
    if (type === "type") {
      let data = CONTRACTS.map(
        ({ name }) => `import * as ${name + "Types"} from "./${name}.${type}s"`
      ).join("\n");

      data = data.concat(
        `\nexport { ${CONTRACTS.map(({ name }) => name + "Types").join(", ")} }`
      );
      fs.writeFileSync(join(CONTRACT_DIR, `${type}s/index.ts`), data);
    } else {
      const data = CONTRACTS.map(
        ({ name }) => `export * from "./${name}.${type}"`
      ).join("\n");
      fs.writeFileSync(join(CONTRACT_DIR, `${type}s/index.ts`), data);
    }
  }

  // Create index.ts for all
  fs.writeFileSync(
    join(CONTRACT_DIR, `index.ts`),
    `export * from "./types"\nexport * from "./messages"`
  );
}

/**
 * @param {string} file: the name of the file
 */
function updateMessageFileType(file) {
  const subdir = "messages";
  const [name] = file.split(".");
  const fileName = file;
  const newFileName = fileName.replace("message-builder", "message");
  fs.renameSync(
    join(CONTRACT_DIR, file),
    join(CONTRACT_DIR, subdir, newFileName)
  );

  // tscodegen assumes x.types.ts is in the same directory as the message-builder and clients
  // However, this is not the case when we group them together
  const fileData = fs.readFileSync(
    join(CONTRACT_DIR, subdir, newFileName),
    "utf-8"
  );
  const updatedFileData = fileData.replace(
    `./${name}.types`,
    `../types/${name}.types`
  );

  fs.writeFileSync(join(CONTRACT_DIR, subdir, newFileName), updatedFileData);
}

console.log("Cleaning up...");
{
  rmSync(TMP_DIR, { recursive: true, force: true });
}

console.log("Contract ts generation completed successfully!");
