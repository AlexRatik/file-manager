import { copyFile } from "./copyFile.js";
import { create } from "./create.js";
import { remove } from "./delete.js";
import { read } from "./read.js";
import { rename } from "./rename.js";

export class BasicOperation {
    async cat(path) {
        await read(path);
    }
    async add(path) {
        await create(path);
    }
    async rename(wrongPath, rightPath) {
        await rename(wrongPath, rightPath);
    }
    async copy(path_to_file, path_to_dir) {
        await copyFile(path_to_file, path_to_dir);
    }
    async move(path_to_file, path_to_dir) {
        await copyFile(path_to_file, path_to_dir, true);
    }
    async remove(path_to_file) {
        await remove(path_to_file);
    }
}
