export const getUserName = () => {
    const nameExpression = process.argv.slice(2)[0];
    const indexOfEqualSymbol = nameExpression.indexOf("=");
    const userName = nameExpression.slice(indexOfEqualSymbol + 1);
    return userName;
};
