import { execSync } from "child_process";

export default async () => {
  console.log("Compiling reset.scss → reset.css...");

  execSync("sass src/reset/reset.scss distribution/reset.css", { stdio: "inherit" });

  console.log("SCSS compile complete.");
};