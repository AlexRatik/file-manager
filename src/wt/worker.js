import workerThreads from "worker_threads";
export const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    try {
        const n = workerThreads.workerData;
        const result = nthFibonacci(n);
        workerThreads.parentPort.postMessage({
            status: "resolved",
            data: result,
        });
    } catch (e) {
        workerThreads.postMessage({ status: "error", data: null });
    }
};

sendResult();
