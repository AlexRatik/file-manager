import path from "node:path";
import fsPromises from "node:fs/promises";
import { list } from "./list.js";
import { OsSystem } from "../osSystem/osSystem.js";

export class Navigation {
    constructor() {
        this.TEXT_FOR_ERROR = "Operation failed!";
    }
    up(currentPath) {
        const newPath = path.join(currentPath, "..");
        return newPath;
    }
    async cd(currentPath, path_to_file) {
        if (!path_to_file) {
            this.logError();
            return currentPath;
        }
        let newPath = "";
        if (path_to_file.startsWith(new OsSystem().getHomeDir())) {
            newPath = path_to_file;
        } else {
            newPath = path.join(currentPath, path_to_file);
        }
        await fsPromises.access(newPath).catch(() => {
            newPath = currentPath;
            this.logError();
        });
        return newPath;
    }
    async ls(currentPath) {
        await list(currentPath).catch(() => {
            this.logError();
        });
        return;
    }
    logError() {
        console.log(this.TEXT_FOR_ERROR);
    }
}
