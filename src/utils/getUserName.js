export const getUserName = () => {
    const args = process.argv.slice(2);
    const nameExpression = args.find((arg) => arg.startsWith("--username"));
    const userName = nameExpression.split("=")[1];
    return userName;
};
