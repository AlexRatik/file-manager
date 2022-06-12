import path from "path";
import fsPromises from "fs/promises";

export const copy = async () => {
    const src = path.resolve("files");
    const out = path.resolve("files_copy");

    copyFiles(src, out);

    async function copyFiles(srcPath, outPath) {
        const TEXTFORERROR = "FS operation failed";
        const files = await fsPromises.readdir(srcPath);
        try {
            await fsPromises.mkdir(outPath);
        } catch (e) {
            throw new Error(TEXTFORERROR);
        }
        for (let i = 0; i < files.length; i++) {
            try {
                const stats = await fsPromises.stat(
                    path.join(srcPath, files[i])
                );
                if (stats.isDirectory()) {
                    copyFiles(
                        path.join(srcPath, files[i]),
                        path.join(outPath, files[i])
                    );
                } else {
                    await fsPromises.copyFile(
                        path.join(srcPath, files[i]),
                        path.join(outPath, files[i])
                    );
                }
            } catch (e) {
                throw new Error(TEXTFORERROR);
            }
        }
    }
};

copy();
