export class Tag{
    static readonly ANGULAR = new Tag('Angular', '#c3002f');
    static readonly TYPESCRIPT = new Tag('Typescript', '#2d79c7');
    static readonly PYTHON = new Tag('Python', '#ffd343');
    static readonly JAVA = new Tag('Java', '#803e33');
    static readonly NODEJS = new Tag('Node.JS', '#026e00');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#f7e018');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key;
    }
}
