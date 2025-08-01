import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcasts-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const encode = "utf-8"

    const rawData = fs.readFileSync(pathData, encode);

    let jsonFile = JSON.parse(rawData);

    if(podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}