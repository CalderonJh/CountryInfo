const keysToIgnore = ['symbol'];

export function objectValues(obj: object): string[] {
  let values: string[] = [];
  console.log(Array.isArray(obj));
  if (Array.isArray(obj)) return obj;
  // console.log(Object.keys(obj));
  for (const key of Object.keys(obj)) {
    if (keysToIgnore?.includes(key)) continue;
    // @ts-ignore: The key will always be valid
    const v = obj[key];
    console.log('en el for ', v);
    if (typeof v == 'object') values = values.concat(objectValues(v));
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

export function toString(obj: any): string {
  if (!obj) return 'Not provided';
  if (typeof obj == 'number') return numberToString(obj);
  if (typeof obj == 'string') return obj;
  return objectValues(obj).join(' • ');
}
