class Book {
    constructor(
        title, 
        authorFirstName, 
        authorLastName,
        ISBN, 
        pubYear,
        pagesNum, 
        genre, 
    )
    {
        this.title = title;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.ISBN = ISBN;
        this.pubYear = pubYear;
        this.pagesNum = pagesNum;
        this.ganre = genre;
    }
}

export default Book;