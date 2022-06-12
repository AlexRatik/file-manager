import readline from "node:readline";
import { getUserName } from "./getUserName.js";
import { MainThread } from "./MainThread.js";

const USER_NAME = getUserName();
const mainThread = new MainThread(USER_NAME);
mainThread.start();

const rl = readline.createInterface(process.stdin, process.stdout);
rl.on("line", async (line) => {
    const message = line.toString("utf-8").trim();
    const input = message.split(" ");
    if (input[0] === ".exit") {
        mainThread.exit();
        rl.close();
    } else {
        await mainThread.onInput(message);
    }
});

rl.on("SIGINT", () => {
    mainThread.exit();
    rl.close();
});
