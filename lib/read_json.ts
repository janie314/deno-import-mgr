async function read_json<T>(filepath: string): Promise<T> {
  return await Deno.readTextFile(filepath).then((res) => JSON.parse(res));
}

export { read_json };
