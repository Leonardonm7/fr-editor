const fs = require("fs");
const { spawnSync } = require("child_process");

const libraryPath = "assets/exercises/data/exerciseLibrary.ts";
const outputDir = "assets/exercises/gifs";
const baseUrl =
  "https://raw.githubusercontent.com/omercotkd/exercises-gifs/refs/heads/main/assets";

const librarySource = fs.readFileSync(libraryPath, "utf8");
const ids = Array.from(
  librarySource.matchAll(/"id": "([0-9]+)"/g),
  (match) => match[1]
);

fs.mkdirSync(outputDir, { recursive: true });

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const id of ids) {
  const output = `${outputDir}/${id}.gif`;

  if (fs.existsSync(output) && fs.statSync(output).size > 0) {
    skipped += 1;
    continue;
  }

  const result = spawnSync(
    "curl",
    [
      "-fL",
      "--retry",
      "3",
      "--retry-delay",
      "1",
      "--connect-timeout",
      "15",
      `${baseUrl}/${id}.gif`,
      "-o",
      output,
    ],
    { stdio: "ignore" }
  );

  if (result.status === 0) {
    downloaded += 1;
  } else {
    failed += 1;
    try {
      fs.unlinkSync(output);
    } catch {}
    console.error(`Failed ${id}`);
  }

  if ((downloaded + failed) % 100 === 0) {
    console.log(
      `Progress: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`
    );
  }
}

console.log(`Done: downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`);
process.exit(failed > 0 ? 1 : 0);
