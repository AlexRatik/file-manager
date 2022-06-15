import fsPromises from "fs/promises";

export const create = async (path_for_create) => {
    const TEXT_FOR_ERROR = "Operation failed!";
    await fsPromises
        .access(path_for_create)
        .then(
            () => console.log(TEXT_FOR_ERROR),
            async () => await fsPromises.writeFile(path_for_create, "")
        )
        .catch(() => console.log(TEXT_FOR_ERROR));
};
