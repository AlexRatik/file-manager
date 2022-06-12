import path from "node:path";
import { release, version } from "node:os";
import { createServer } from "node:http";
import "./files/c.js";
import * as a from "./files/a.json" assert { type: "json" };
import * as b from "./files/b.json" assert { type: "json" };
import { fileURLToPath } from "node:url";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(
    `Path to current directory is ${path.dirname(
        fileURLToPath(path.dirname(import.meta.url))
    )}`
);

const createMyServer = createServer((_, res) => {
    res.end("Request accepted");
});

export { unknownObject, createMyServer };
