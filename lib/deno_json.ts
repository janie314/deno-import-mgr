import { path } from "../deps.ts";

type DenoJson = { imports: { [key: string]: string } };

async function read_deno_json(): Promise<DenoJson> {
  const cwd = Deno.cwd();
  const filepath = path.join(cwd, "deno.json");
  return await Deno.readTextFile(filepath).then((res) => JSON.parse(res));
}

export { type DenoJson, read_deno_json };
