import zlib from "node:zlib";
import fs from "node:fs";
import fsPromises from "node:fs/promises";

export const decompress = async (fileForWrite, fileForDecompress) => {
    await fsPromises
        .access(fileForDecompress)
        .then(() => {
            const unzip = zlib.createBrotliDecompress();
            const readStream = fs.createReadStream(fileForDecompress);
            const writeStream = fs.createWriteStream(fileForWrite);
            readStream.pipe(unzip).pipe(writeStream);
        })
        .catch(() => {
            console.log("Operation failed!");
        });
};
