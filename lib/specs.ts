type DenoJson = { imports: { [key: string]: string } };

type PackageJson = {
  dependencies: {
    [pkg: string]: string;
  };
  devDependencies: {
    [pkg: string]: string;
  };
};

export { type DenoJson, type PackageJson };
