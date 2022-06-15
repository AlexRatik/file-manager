import * as os from "os";

export class OsSystem {
    getEOL() {
        console.log(os.EOL);
    }
    get_cpus() {
        const processors_number = os.cpus().length;
        console.log(`Number of processors: ${processors_number}\n`);
        os.cpus().forEach((cpu) => {
            console.log(`Model: ${cpu.model}`);
            console.log(`Clock rate (in GHz): ${cpu.speed / 1000}\n`);
        });
    }
    getHomeDir() {
        console.log(os.homedir());
        return os.homedir();
    }
    getUserName() {
        console.log(os.userInfo().username);
        return os.userInfo().username;
    }
    getArchitecture() {
        console.log(os.arch());
        return os.arch();
    }
}
