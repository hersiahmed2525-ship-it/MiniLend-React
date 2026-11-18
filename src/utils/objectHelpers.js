export function assertObject(obj) {
  if (obj === null || typeof obj !== "object") {
    throw new TypeError("Expected an object.");
  }
}

export function assertKey(key) {
  if (typeof key !== "string" && typeof key !== "symbol") {
    throw new TypeError("Key must be a string or symbol.");
  }
}

export function createObj(key, value) {
  assertKey(key);
  return {
    [key]: value,
  };
}

export function updateObj(obj, key, value) {
  assertObject(obj);
  assertKey(key);
  return {
    ...obj,
    [key]: value,
  };
}

export function deleteObj(obj, key) {
  assertObject(obj);
  assertKey(key);
  if (!Object.hasOwn(obj, key)) {
    throw new Error(`Property "${String(key)}" does not exist.`);
  }
  const rest = { ...obj };
  delete rest[key];
  return rest;
}

export function readObjValue(obj, key) {
  assertObject(obj);
  assertKey(key);
  if (!Object.hasOwn(obj, key)) {
    throw new Error(`Property "${String(key)}" does not exist.`);
  }
  return obj[key];
}

export function readObjKey(obj, value) {
  assertObject(obj);
  const key = Reflect.ownKeys(obj).find((candidate) =>
    Object.is(obj[candidate], value),
  );
  if (key === undefined) {
    throw new Error("Value not found.");
  }
  return key;
}
