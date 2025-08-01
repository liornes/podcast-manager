import { PodcastModel } from "./podcasts-model";

export interface FilterPodcastModel {
    statusCode: number,
    body: PodcastModel[] 
}