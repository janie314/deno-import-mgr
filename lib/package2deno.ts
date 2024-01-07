import { DenoJson, PackageJson } from "./specs.ts";

async function package2deno(package_json: PackageJson) {
  const res: DenoJson = { imports: {} };
  for (
    const [pkg, version] of Object.entries({
      ...package_json.dependencies,
      ...package_json.devDependencies,
    })
  ) {
    res.imports[pkg] = `https://esm.sh/${pkg}@${version}`;
  }
  return res;
}

export { package2deno };
