import { join } from "path";

type DenoJson = { imports: { [key: string]: string } };

async function read_deno_json(): Promise<DenoJson> {
  const cwd = Deno.cwd();
  const path = join(cwd, "deno.json");
  return await Deno.readTextFile(path).then((res) => JSON.parse(res));
}

export { type DenoJson, read_deno_json };
