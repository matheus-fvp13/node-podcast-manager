import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

        if(req.method === "GET" && baseUrl === "/api/list") {
            await getListEpisodes(req, res);
        }

        if(req.method === "GET" && baseUrl === "/api/episode") {
            await getFilterEpisodes(req, res);
        }
    }
);

const port = process.env.SERVER_PORT;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});