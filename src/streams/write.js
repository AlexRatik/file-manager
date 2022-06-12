import path from "node:path";
import fs from "node:fs";
import { createInterface } from "node:readline";

export const write = async () => {
    console.log("Write 'EXIT' for exit.\n\n");
    const fileToWrite = path.join(path.resolve(), "files", "fileToWrite.txt");
    const stream = fs.createWriteStream(fileToWrite);
    const readlines = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readlines.on("line", (line) => {
        if (line.trim() === "EXIT") {
            readlines.close();
        } else {
            stream.write(line + "\n");
        }
    });
    readlines.on("close", () => {
        stream.end();
        console.log("Good luck=)");
    });
};

write();
