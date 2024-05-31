import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify([
            {
                podcastName: "flow",
                episode: "CBUM - Flow #319",
                videoId: "pQSuQmUfS30",
                categories: ["saúde", "esporte", "bodybuilder"]
            },
            {
                podcastName: "flow",
                episode: "PETER JORDAN + BRENO JORDAN - Flow #350",
                videoId: "RejZhH-Dfjs",
                categories: ["tecnologia", "comics", "animes"]
            }
        ])
    );
};