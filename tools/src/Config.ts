export class Config {
    static wordDelimiter: string;
    static stringDelimiter: string;
    static maxList: number;
    static port: string;
    static baudRate: number;

    constructor(init: {
        port: string,
        baudRate: number,
        stringDelimiter: string,
        wordDelimiter: string,
        maxList: number
    }) {
        Config.port = init.port;
        Config.baudRate = init.baudRate;
        Config.stringDelimiter = init.stringDelimiter;
        Config.wordDelimiter = init.wordDelimiter;
        Config.maxList = init.maxList;
    }
}