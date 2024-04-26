import { envs } from "./config/envs.adapter";
import { Server } from "./presentation/server";


(async () => {
    main();
})();


async function main(){


    const server = new Server({
        ia_api_key: envs.GEMINI_API_KEY
    });

    server.start();
}