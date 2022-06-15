import fsPromises from "node:fs/promises";
import fs from "node:fs";
import { Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

export const read = async (path_to_file) => {
    const TEXT_FOR_ERROR = "Operation failed!";
    await fsPromises
        .access(path_to_file)
        .then(async () => {
            const readStream = fs.createReadStream(path_to_file);
            const write = new Writable({
                write(chunk, encoding, cb) {
                    console.log(chunk.toString());
                    cb();
                },
            });
            await pipeline(readStream, write);
        })
        .catch(() => {
            console.log(TEXT_FOR_ERROR);
        });
};
