import path from "node:path";
import fs from "node:fs";
import { stdout } from "node:process";

export const read = async () => {
    const fileToRead = path.join(path.resolve(), "files", "fileToRead.txt");
    const stream = fs.createReadStream(fileToRead, { encoding: "utf-8" });
    stream.pipe(stdout);
};

read();
