import { encoded, translations } from "./data.js";

function decodeFields(data, translations) {
  const uniqueIds = new Set();

  const decodedData = data.map((object) => {
    const decodedValue = {};
    for (const key in object) {
      if (
        key.endsWith("Id") &&
        !["groupId", "service", "formatSize", "ca"].includes(key)
      ) {
        const value = object[key];

        if (translations[value]) {
          decodedValue[key] = translations[value];
        } else {
          decodedValue[key] = value;
        }
        uniqueIds.add(value);
      } else {
        decodedValue[key] = object[key];
      }
    }
    return decodedValue;
  });

  const uniqueIdsArray = [...uniqueIds].sort((a, b) => a - b);
  return { decodedData, uniqueIds: uniqueIdsArray };
}

const { decodedData, uniqueIds } = decodeFields(encoded, translations);
console.log("Decoded Data:");
console.log(decodedData);
console.log("\nUnique IDs:");
console.log(uniqueIds);
