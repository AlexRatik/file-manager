import path from "path";
import fsPromises from "fs/promises";

export const list = async () => {
    const TEXTFORERROR = "FS operation failed";
    const dirForPrint = path.join(path.resolve(), "files");
    fsPromises
        .access(dirForPrint)
        .catch(() => {
            throw new Error(TEXTFORERROR);
        })
        .then(() => {
            return fsPromises.readdir(dirForPrint);
        })
        .then((files) => {
            if (files.length === 0) {
                console.log("\n\tThere are no files!!!\n");
            }
            files.forEach((file) => console.log("\t" + file + "\n"));
        });
};

list();
