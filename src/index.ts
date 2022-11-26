export function copyDeep<T>(source: T): T {
  if (source !== null && typeof source === "object") {
    if (Array.isArray(source)) {
      return copyDeepArray(source) as T
    } else {
      return copyDeepObject(source as Record<string, unknown>) as T
    }
  }

  return source
}

function copyDeepArray<E>(source: Array<E>): Array<E> {
  const array: Array<E> = []
  for (const e of source) {
    array.push(copyDeep(e))
  }
  return array
}

function copyDeepObject<T extends Record<string, unknown>>(source: T): T {
  const object = {}
  for (const key of Object.keys(source)) {
    object[key] = copyDeep(source[key])
  }
  return object as T
}

export default copyDeep
