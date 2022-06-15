import path from "node:path";
import { BasicOperation } from "./basic/basicOperations.js";
import { calculateHash } from "./hash/calcHash.js";
import { Navigation } from "./navigation/navigation.js";
import { OsSystem } from "./osSystem/osSystem.js";
import { compress } from "./compress_decompress/compress.js";
import { decompress } from "./compress_decompress/decompress.js";

export class MainThread {
    constructor(name) {
        this.name = name;
        this.navigation = new Navigation();
        this.basic = new BasicOperation();
        this.osSystem = new OsSystem();
        this.homeDir = this.osSystem.getHomeDir();
        this.currentPath = this.homeDir;
    }
    start() {
        console.log(`Welcome to the File Manager, ${this.name}!`);
        this.showCurrentDirectory(this.homeDir);
    }
    exit() {
        console.log(`Thank you for using File Manager, ${this.name}!`);
    }
    showCurrentDirectory() {
        console.log(`You are currently in ${this.currentPath}`);
    }
    async onInput(data) {
        const command = data.split(" ")[0];
        const var_1 = data.split(" ")[1];
        let abs_var_1 = "";
        let abs_var_2 = "";
        if (var_1) abs_var_1 = path.join(this.currentPath, var_1);
        const var_2 = data.split(" ")[2];
        if (var_2) abs_var_2 = path.join(this.currentPath, var_2);
        switch (command) {
            case "up": {
                this.currentPath = this.navigation.up(this.currentPath);
                this.showCurrentDirectory();
                break;
            }
            case "cd": {
                this.currentPath = await this.navigation.cd(
                    this.currentPath,
                    var_1
                );
                this.showCurrentDirectory();
                break;
            }
            case "ls": {
                await this.navigation.ls(this.currentPath);
                this.showCurrentDirectory();
                break;
            }
            case "cat": {
                await this.basic.cat(abs_var_1);
                this.showCurrentDirectory();
                break;
            }
            case "add": {
                await this.basic.add(abs_var_1);
                this.showCurrentDirectory();
                break;
            }
            case "rn": {
                await this.basic.rename(abs_var_1, abs_var_2);
                this.showCurrentDirectory();
                break;
            }
            case "cp": {
                if (var_1 && abs_var_2) {
                    await this.basic.copy(
                        abs_var_1,
                        path.join(abs_var_2, var_1)
                    );
                } else {
                    console.log("Operation failed");
                }
                this.showCurrentDirectory();
                break;
            }
            case "mv": {
                if (var_1 && abs_var_2) {
                    await this.basic.move(
                        abs_var_1,
                        path.join(abs_var_2, var_1)
                    );
                } else {
                    console.log("Operation failed");
                }
                this.showCurrentDirectory();
                break;
            }
            case "rm": {
                await this.basic.remove(abs_var_1);
                this.showCurrentDirectory();
                break;
            }
            case "os": {
                const command = var_1.slice(2);
                switch (command) {
                    case "EOL": {
                        this.osSystem.getEOL();
                        this.showCurrentDirectory();
                        break;
                    }
                    case "cpus": {
                        this.osSystem.get_cpus();
                        this.showCurrentDirectory();
                        break;
                    }
                    case "homedir": {
                        this.osSystem.getHomeDir();
                        this.showCurrentDirectory();
                        break;
                    }
                    case "username": {
                        this.osSystem.getUserName();
                        this.showCurrentDirectory();
                        break;
                    }
                    case "architecture": {
                        this.osSystem.getArchitecture();
                        this.showCurrentDirectory();
                        break;
                    }
                    default: {
                        console.log("Invalid input");
                        break;
                    }
                }
                break;
            }
            case "hash": {
                await calculateHash(abs_var_1);
                this.showCurrentDirectory();
                break;
            }
            case "compress": {
                await compress(abs_var_1, abs_var_2);
                this.showCurrentDirectory();
                break;
            }
            case "decompress": {
                await decompress(abs_var_1, abs_var_2);
                this.showCurrentDirectory();
                break;
            }
            default: {
                console.log("Invalid input");
                this.showCurrentDirectory();
                break;
            }
        }
    }
}
