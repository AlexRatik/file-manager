import path from "node:path";
import { fork } from "node:child_process";

export const spawnChildProcess = async (args) => {
    const childFile = path.join(path.resolve(), "files", "script.js");
    fork(childFile, args);
};

spawnChildProcess([5, 1, 9]);
