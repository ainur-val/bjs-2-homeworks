class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    
    fix() {
        this.state = this.state * 1.5;
    }

        set state(value) {
            if (value  > 100) {
                this._state = 100;
            } else if (value < 0) {
                this._state = 0;
            } else {
                this._state = value;
            }
        }
        get state() {
            return this._state;
        }
    
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name, ...books) {
        this.name = name;
        this.books = [...books];
    }
    addBook(book) {
        if (book.state > 30) {
        this.books.push(book);
        } 
    }
    
    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }

    giveBookByName(bookName) {
        let reqBook = this.findBookBy('name', bookName);
        if (reqBook !== undefined) {
            this.books.splice(this.books.indexOf(reqBook), 1);
        } 
        return reqBook;
    }
}