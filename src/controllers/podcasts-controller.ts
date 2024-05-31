import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify({
            podcastName: "flow",
            episode: "CBUM - Flow #319",
            videoId: "pQSuQmUfS30",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg",
            link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
            categories: ["saúde", "esporte", "bodybuilder"]
        }));
};