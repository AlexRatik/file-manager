import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";

export const create = async () => {
    const OUTPATH = path.join(path.resolve(), "files", "fresh.txt");
    const TEXTFORWRITE = "I am fresh and young";
    const TEXTFORERROR = "FS operation failed";
    fs.stat(OUTPATH, async (err) => {
        if (err == null) {
            throw new Error(TEXTFORERROR);
        } else {
            await fsPromises.writeFile(OUTPATH, TEXTFORWRITE);
        }
    });
};

create();
