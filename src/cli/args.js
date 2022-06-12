export const parseArgs = () => {
    let result = "";
    const args = process.argv.slice(2);
    args.map((arg, i) => {
        if (i % 2 === 0) {
            result += `${arg.slice(2)} is `;
        } else {
            if (i === args.length - 1) {
                result += arg;
            } else {
                result += `${arg}, `;
            }
        }
    });
    console.log(result);
};

parseArgs();
