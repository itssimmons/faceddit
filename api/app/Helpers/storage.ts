import { STORAGE_DIR } from "@/env";
import type { StorageHelper } from "@/types";

export default {
  base: STORAGE_DIR,
  resolve: ({protocol, host, dir, filename}: StorageHelper.Resolve) => `${protocol}://${host}/${dir}/${filename}`
}