interface Content {
    title: string;
    text?: string;
    summary(): string;
}

class Book implements Content {
    constructor(public title: string, public text: string) { }

    summary(): string {
        return `title=${this.title}, text=${this.text}`;
    }
}

let mybook: Book = new Book('world of music', 'hello world java music');
console.log(mybook.summary());