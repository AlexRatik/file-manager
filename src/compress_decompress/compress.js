import zlib from "node:zlib";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

export const compress = async (fileForCompress, fileForWrite) => {
    await fsPromises
        .access(fileForCompress)
        .then(() => {
            const zip = zlib.createBrotliCompress();
            const readStream = fs.createReadStream(fileForCompress);
            const writeStream = fs.createWriteStream(fileForWrite);
            readStream.pipe(zip).pipe(writeStream);
        })
        .catch(() => {
            console.log("Operation failed!");
        });
};
