import fsPromises from "fs/promises";
import fs from "fs";

export const rename = async (wrongPath, rightPath) => {
    const TEXT_FOR_ERROR = "Operation failed!";
    fsPromises
        .access(wrongPath)
        .catch(() => {
            console.log(TEXT_FOR_ERROR);
        })
        .then(() => {
            fs.stat(rightPath, async (err) => {
                if (err == null) {
                    console.log(TEXT_FOR_ERROR);
                } else {
                    await fsPromises.rename(wrongPath, rightPath);
                }
            });
        })
        .catch(() => console.log(TEXT_FOR_ERROR));
};
