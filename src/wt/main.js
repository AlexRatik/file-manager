import path from "node:path";
import { Worker } from "node:worker_threads";
import os from "node:os";

export const performCalculations = async () => {
    const workerFile = path.join(path.resolve(), "worker.js");
    const initN = 10;
    const CPUNumber = os.cpus().length;
    const workersArr = [];
    const createWorkerPromise = (n) =>
        new Promise((res) => {
            const worker = new Worker(workerFile, {
                workerData: n,
            });
            worker.on("message", (msg) => {
                res(msg);
            });
        });

    for (let i = 0; i < CPUNumber; i++) {
        workersArr.push(createWorkerPromise(initN + i));
    }
    console.log(await Promise.all(workersArr));
};

performCalculations();
