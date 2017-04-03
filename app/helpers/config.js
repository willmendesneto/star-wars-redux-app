const configuration = {};

export function mergeConfig(object) {
  const parsed = typeof object === 'string' ? JSON.parse(object) : object;
  return Object.assign(configuration, parsed);
}

export default function config(path) {
  if (!configuration[path]) {
    throw new Error(`config not found: ${path}`);
  }
  return configuration[path];
}
