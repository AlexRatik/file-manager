import fsPromises from "node:fs/promises";
import { createHash } from "node:crypto";

export const calculateHash = async (path_to_file) => {
    await fsPromises
        .readFile(path_to_file, { encoding: "utf-8" })
        .then((text) => {
            console.log(createHash("sha256").update(text).digest("hex"));
        })
        .catch(() => {
            console.log("Operation failed!");
        });
};
