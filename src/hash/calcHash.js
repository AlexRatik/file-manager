import path from "node:path";
import fsPromises from "node:fs/promises";
import { createHash } from "node:crypto";

export const calculateHash = async () => {
    const fileForHash = path.join(
        path.resolve(),
        "files",
        "fileToCalculateHashFor.txt"
    );
    await fsPromises
        .readFile(fileForHash, { encoding: "utf-8" })
        .then((text) => {
            console.log(createHash("sha256").update(text).digest("hex"));
        });
};

calculateHash();
