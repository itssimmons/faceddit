import type { Arguments } from "@/types"
import { isLeafable } from "./leaf"

export function exclude<T extends Record<any, unknown> = Arguments<typeof exclude>[0] , Key = keyof T>(
  data: T,
  ...keys: Key[]
): T {
  for (let key of keys) {
    delete data[key]
  }

  return data
}

export function excludeMany<T extends Record<any, any> = Arguments<typeof exclude>[0] , Key = keyof T>(
  data: T[],
  ...keys: Key[] & string[]
): T[] {
  data.forEach(element => {
    for (let key of keys) {
      if (isLeafable(key)) {
        const [t, k] = key.split(".")
        delete element[t][k]
      } else {
        delete element[key]
      }
    }
  })

  return data
}
