class Book2 {
    constructor(private _title: string, private _text: string) { }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }
}

let book = new Book2("angular2", "unknown");
book.title = "Angular2 Typescript";
console.log(book.title);