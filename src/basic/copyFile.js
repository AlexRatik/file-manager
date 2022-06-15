import fsPromises from "fs/promises";

export const copyFile = async (
    path_to_file,
    destination_path,
    isDeleteInitial = false
) => {
    const TEXT_FOR_ERROR = "Operation failed";
    await fsPromises
        .access(path_to_file)
        .then(() => {
            fsPromises
                .stat(path_to_file)
                .then((stats) => {
                    if (stats.isDirectory()) throw new Error(TEXT_FOR_ERROR);
                })
                .then(() => {
                    console.log(1);
                    fsPromises
                        .copyFile(path_to_file, destination_path)
                        .catch(() => console.log(TEXT_FOR_ERROR));
                });
        })
        .catch(() => console.log(TEXT_FOR_ERROR));
    if (isDeleteInitial) {
        await fsPromises.rm(path_to_file);
    }
};
