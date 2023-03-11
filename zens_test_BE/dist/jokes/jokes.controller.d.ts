import { JokesService } from './jokes.service';
export declare class JokesController {
    private readonly JokesService;
    constructor(JokesService: JokesService);
    getAll(): import("./joke.entity").Joke[];
    getOne(id: any): any;
    getNew(idList: any): {};
    reactJoke(id: any, reaction: any): import("./joke.entity").Joke;
}
