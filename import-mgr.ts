import { join } from "https://deno.land/std@0.211.0/path/mod.ts";

async function cache() {
  const cwd = Deno.cwd();
  const path = join(cwd, "deno.json");
  const deno_json = await Deno.readTextFile(path).then((res) =>
    JSON.parse(res)
  );
  return Promise.all(
    Object.values(deno_json.imports).map(async (url) => {
      const res = await new Deno.Command("deno", { args: ["info", url] })
        .output();
      return {
        success: res.success,
        url,
      };
    }),
  );
}

const res = await cache();
console.table(res);
