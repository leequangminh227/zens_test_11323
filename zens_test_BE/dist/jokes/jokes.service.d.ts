import { Joke } from './joke.entity';
export declare class JokesService {
    private jokeList;
    getAll(): Joke[];
    getOne(id: any): any;
    getNew(idList: any): {};
    reactJoke(id: any, reaction: any): Joke;
}
