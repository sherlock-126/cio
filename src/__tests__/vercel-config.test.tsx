import fs from "fs";
import path from "path";

describe("Vercel deployment configuration", () => {
  const rootDir = path.resolve(__dirname, "../..");

  test("vercel.json exists and sets framework to nextjs", () => {
    const vercelJsonPath = path.join(rootDir, "vercel.json");
    expect(fs.existsSync(vercelJsonPath)).toBe(true);

    const config = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
    expect(config.framework).toBe("nextjs");
  });

  test("next.config.mjs does not set output property", () => {
    const nextConfigPath = path.join(rootDir, "next.config.mjs");
    const content = fs.readFileSync(nextConfigPath, "utf-8");
    // Ensure no output: "standalone" or other output config
    expect(content).not.toMatch(/output\s*:/);
  });

  test("vercel.json sets explicit buildCommand", () => {
    const vercelJsonPath = path.join(rootDir, "vercel.json");
    const config = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
    expect(config.buildCommand).toBe("npm run build");
  });

  test("public directory exists", () => {
    const publicDir = path.join(rootDir, "public");
    expect(fs.existsSync(publicDir)).toBe(true);
    expect(fs.statSync(publicDir).isDirectory()).toBe(true);
  });

  test("next.config.ts does not exist (Next.js 14.2.x requires .mjs)", () => {
    const nextConfigTsPath = path.join(rootDir, "next.config.ts");
    expect(fs.existsSync(nextConfigTsPath)).toBe(false);
  });
});
