import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethods } from "./utils/http-methods";

export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse
) => {
    const baseUrl = request.url?.split("?")[0] ?? "";

    if(request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}