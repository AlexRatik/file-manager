import path from "node:path";
import zlib from "node:zlib";
import fs from "node:fs";

export const compress = async () => {
    const fileForCompress = path.join(
        path.resolve(),
        "files",
        "fileToCompress.txt"
    );
    const fileForWrite = path.join(path.resolve(), "files", "archive.gz");
    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(fileForCompress);
    const writeStream = fs.createWriteStream(fileForWrite);
    readStream.pipe(gzip).pipe(writeStream);
    fs.rm(fileForCompress, (err) => {
        if (err) {
            console.log(err.name);
        }
    });
};

compress();
