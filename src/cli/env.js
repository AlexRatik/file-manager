export const parseEnv = () => {
    let result = "";
    for (let key in process.env) {
        if (key.startsWith("RSS_")) {
            result += `${key}=${process.env[key]}; `;
        }
    }
    console.log(result);
};

parseEnv();
