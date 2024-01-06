import { join } from "https://deno.land/std@0.211.0/path/mod.ts";

import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.3/command/mod.ts";

const path = {
  join,
};

const cliffy = {
  Command,
};

export { cliffy, path };
