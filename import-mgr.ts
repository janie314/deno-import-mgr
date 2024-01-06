import { consts } from "./consts.ts";
import { Command } from "cliffy";
import { read_deno_json } from "./lib/deno_json.ts";
import { cache } from "./lib/cache.ts";

await new Command()
  .name("import-mgr")
  .version(consts.VERSION)
  .description(consts.DESCRIPTION)
  .command("cache")
  .description("cache deno.json dependencies")
  .option("-v, --verbose", "Enable verbose output.")
  .action(async (args: { verbose: boolean }) => {
    const deno_json = await read_deno_json();
    const res = await cache(deno_json, args.verbose);
    console.table(res);
  })
  .parse(Deno.args);
