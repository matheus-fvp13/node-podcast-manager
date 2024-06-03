import { PodcastTransferModel } from "../models/podcast-tranfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] ?? "";
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length === 0 ? StatusCode.NO_CONTENT : StatusCode.OK;
    responseFormat.body = data;

    return responseFormat;
} 