import { DenoJson } from "./deno_json.ts";

async function cache(
  deno_json: DenoJson,
  verbose: boolean,
): Promise<{ success: boolean; url: string }[]> {
  return await Promise.all(
    Object.values(deno_json.imports).map(async (url: string) => {
      const res = await new Deno.Command("deno", { args: ["info", url] })
        .output();
      if (verbose) {
        console.log(new TextDecoder().decode(res.stdout));
      }
      return {
        success: res.success,
        url,
      };
    }),
  );
}

export { cache };
