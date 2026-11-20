export function assertObject(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Expected an object.");
  }
}
