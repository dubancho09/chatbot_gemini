
interface Options {
    ia_api_key: string;
}

export class Server {
    private readonly ia_api_key: string;


    constructor(options: Options) {
        const { ia_api_key } = options;
        this.ia_api_key = ia_api_key;
    }

    async start(){
        console.log(this.ia_api_key);
    }
}