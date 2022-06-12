import { getHomeDir } from "./getHomeDirectory.js";
import { Navigation } from "./navigation.js";

export class MainThread {
    constructor(name) {
        this.name = name;
        this.navigation = new Navigation();
        this.homeDir = getHomeDir();
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
        const path_to_file_1 = data.split(" ")[1];
        switch (command) {
            case "up": {
                this.currentPath = this.navigation.up(this.currentPath);
                this.showCurrentDirectory();
                break;
            }
            case "cd": {
                this.currentPath = await this.navigation.cd(
                    this.currentPath,
                    path_to_file_1
                );
                this.showCurrentDirectory();
                break;
            }
            case "ls": {
                await this.navigation.ls(this.currentPath);
                this.showCurrentDirectory();
                break;
            }
            default: {
                console.log("Invalid input");
                this.showCurrentDirectory();
            }
        }
    }
}
