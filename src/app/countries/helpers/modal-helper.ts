export function objectValues(
  obj: object,
  keysToIgnore: string[] = [],
): string[] {
  let values: string[] = [];
  if (Array.isArray(obj)) return obj;
  for (const key of Object.keys(obj)) {
    if (keysToIgnore?.includes(key)) continue;
    // @ts-ignore: The key will always be valid
    const v = obj[key];
    if (typeof v == 'object')
      values = values.concat(objectValues(v, keysToIgnore));
    else values.push(v);
  }

  return values;
}

function numberToString(numero: number): string {
  const section = numero
    .toFixed(0)
    .toString()
    .split(/(?=(?:\d{3})+$)/);
  return section.join('.');
}

export function toString(obj: any, toIgnore?: string[]): string {
  if (!obj) return 'Not provided';
  if (typeof obj == 'number') return numberToString(obj);
  if (typeof obj == 'string') return obj;
  return objectValues(obj, toIgnore).join(' • ');
}
