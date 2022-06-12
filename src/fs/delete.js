import path from "path";
import fsPromises from "fs/promises";

export const remove = async () => {
    const TEXTFORERROR = "FS operation failed";
    const pathForDelete = path.join(
        path.resolve(),
        "files",
        "fileToRemove.txt"
    );
    fsPromises.rm(pathForDelete).catch(() => {
        throw new Error(TEXTFORERROR);
    });
};

remove();
