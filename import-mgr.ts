import { join } from "path";

type DenoJson = { imports: { [key: string]: string } };

async function read_deno_json(): Promise<DenoJson> {
  const cwd = Deno.cwd();
  const path = join(cwd, "deno.json");
  return await Deno.readTextFile(path).then((res) => JSON.parse(res));
}

async function cache(
  deno_json: DenoJson,
): Promise<{ success: boolean; url: string }[]> {
  return await Promise.all(
    Object.values(deno_json.imports).map(async (url: string) => {
      const res = await new Deno.Command("deno", { args: ["info", url] })
        .output();
      return {
        success: res.success,
        url,
      };
    }),
  );
}

const deno_json = await read_deno_json();
const res = await cache(deno_json);
console.table(res);
