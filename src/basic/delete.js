import fsPromises from "fs/promises";

export const remove = async (path_to_file) => {
    const TEXT_FOR_ERROR = "Operation failed";
    fsPromises.rm(path_to_file).catch(() => {
        console.log(TEXT_FOR_ERROR);
    });
};
