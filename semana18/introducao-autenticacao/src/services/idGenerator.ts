import { v4 as uuidV4 } from "uuid";

export function idGenerator(): string {
  return uuidV4();
}
