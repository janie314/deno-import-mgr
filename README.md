# deno-import-mgr

Manage Deno imports (until better 1st-party tools are available).

To use Vite and other projects with pure Deno, I manage my dependencies with a
standard `package.json`.

To update my `package.json` dependencies, I use `npm-check-updates`:

```shell
deno run --allow-read --allow-write --allow-sys --allow-env npm:npm-check-updates
```

To convert `package.json` to `deno.json`, I use this repo's command shown below.

# Usage

```shell
# deno run -A https://esm.sh/gh/janie314/deno-import-mgr/mod.ts -h
Usage:   import-mgr
Version: v0.1.0

Description:

  Deno's import manager.

Options:

  -h, --help     - Show this help.
  -V, --version  - Show the version number for this program.

Commands:

  cache         - cache deno.json dependencies
  package2deno  - convert package.json to deno.json and cache dependencies
```
