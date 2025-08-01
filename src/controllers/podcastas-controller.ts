import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content: FilterPodcastModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    response.write(JSON.stringify(content.body));
    response.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end();
};