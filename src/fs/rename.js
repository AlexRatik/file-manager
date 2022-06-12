import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";

export const rename = async () => {
    const TEXTFORERROR = "FS operation failed";
    const wrongPath = path.join(path.resolve(), "files", "wrongFilename.txt");
    const rightPath = path.join(path.resolve(), "files", "properFilename.md");
    fsPromises
        .access(wrongPath)
        .catch(() => {
            throw new Error(TEXTFORERROR);
        })
        .then(() => {
            fs.stat(rightPath, async (err) => {
                if (err == null) {
                    throw new Error(TEXTFORERROR);
                } else {
                    await fsPromises.rename(wrongPath, rightPath);
                }
            });
        });
};

rename();
