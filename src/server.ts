import * as http from "http";
import { getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        if(req.method === "GET" && req.url === "/api/list") {
            await getListEpisodes(req, res);
        }

        if(req.method === "GET" && req.url === "/api/episode") {
            await getListEpisodes(req, res);
        }
    }
);

const port = process.env.SERVER_PORT;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});