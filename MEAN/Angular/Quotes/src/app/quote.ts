export class Quotes{
    count: number;
    content: string;
    author: string;
    constructor(count: number = 0, content: string = '', author: string =''){
        this.count = count;
        this.content = content;
        this.author = author;
    }
}
