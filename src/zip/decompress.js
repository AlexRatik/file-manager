import path from "node:path";
import zlib from "node:zlib";
import fs from "node:fs";

export const decompress = async () => {
    const fileForWrite = path.join(
        path.resolve(),
        "files",
        "fileToCompress.txt"
    );
    const fileForDecompress = path.join(path.resolve(), "files", "archive.gz");
    const ungzip = zlib.createUnzip();
    const readStream = fs.createReadStream(fileForDecompress);
    const writeStream = fs.createWriteStream(fileForWrite);
    readStream.pipe(ungzip).pipe(writeStream);
    fs.rm(fileForDecompress, (err) => {
        if (err) {
            console.log(err.name);
        }
    });
};

decompress();
