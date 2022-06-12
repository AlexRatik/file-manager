import path from "node:path";
import fs from "node:fs";
import { stdout } from "node:process";
import { Stream } from "node:stream";

export const transform = async () => {
    const fileToRead = path.join(path.resolve(), "files", "fileToRead.txt");
    const fileToWrite = path.join(path.resolve(), "files", "fileToWrite.txt");
    const readableStram = fs.createReadStream(fileToRead, {
        encoding: "utf-8",
    });
    const writeableStream = fs.createWriteStream(fileToWrite, {
        encoding: "utf-8",
    });
    const transform = Stream.Transform({
        transform(chunk, options, cb) {
            cb(null, chunk.toString().split("").reverse().join(""));
        },
    });
    readableStram.pipe(transform).pipe(writeableStream);
};

transform();
