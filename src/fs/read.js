import path from "path";
import fsPromises from "fs/promises";

export const read = async () => {
    const TEXTFORERROR = "FS operation failed";
    const pathForRead = path.join(path.resolve(), "files", "fileToRead.txt");
    fsPromises
        .access(pathForRead)
        .catch(() => {
            throw new Error(TEXTFORERROR);
        })
        .then(async () => {
            return await fsPromises.readFile(pathForRead, {
                encoding: "utf-8",
            });
        })
        .then(console.log);
};

read();
