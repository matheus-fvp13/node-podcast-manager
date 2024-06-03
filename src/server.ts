import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {
        const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

        if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
            await getListEpisodes(request, response);
        }

        if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisodes(request, response);
        }
    }
);

const port = process.env.SERVER_PORT;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});