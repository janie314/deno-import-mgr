import { consts } from "./consts.ts";
import { cliffy } from "./deps.ts";
import { read_json } from "./lib/read_json.ts";
import { cache } from "./lib/cache.ts";
import { DenoJson, PackageJson } from "./lib/specs.ts";
import { join } from "path";
import { package2deno } from "./lib/package2deno.ts";

await new cliffy.Command()
  .name("import-mgr")
  .version(consts.VERSION)
  .description(consts.DESCRIPTION)
  .command("cache")
  .description("cache deno.json dependencies")
  .option("-v, --verbose", "Enable verbose output.")
  // @ts-ignore seems fine...
  .action(async (args: { verbose: boolean }) => {
    const filepath = join(Deno.cwd(), "deno.json");
    const deno_json = await read_json<DenoJson>(filepath);
    const res = await cache(deno_json, args.verbose);
    console.table(res);
  })
  .reset()
  .command("package2deno")
  .description("convert package.json to deno.json and cache dependencies")
  // option for --no-cache
  .action(async () => {
    const filepath = join(Deno.cwd(), "package.json");
    const out_filepath = join(Deno.cwd(), "deno.json");
    const package_json = await read_json<PackageJson>(filepath);
    const deno_json = await package2deno(package_json);
    await Deno.writeTextFile(out_filepath, JSON.stringify(deno_json));
    const res = await cache(deno_json, false);
    console.table(res);
  })
  .parse(Deno.args);
