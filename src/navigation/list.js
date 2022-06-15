import fsPromises from "fs/promises";

export const list = async (dir) => {
    await fsPromises
        .access(dir)
        .then(() => {
            return fsPromises.readdir(dir);
        })
        .then((files) => {
            if (files.length === 0) {
                console.log("\nThere are no files!\n");
            }
            files.forEach((file) => console.log("\t" + file));
        });
};
