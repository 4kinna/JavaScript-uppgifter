"use strict";
//min bok konstruktor som håller bokens egenskaper och metoder
function Book(name, subject, pages, isbn) {
  this.name = name;
  this.subject = subject;
  this.pages = pages;
  this.isbn = isbn;

  //metod för att visa upp bökernas information på ett snyggt sett
  this.getBookInfo = function () {
    return (
      "Book: " +
      this.name +
      "\nTopic: " +
      this.subject +
      "\nPages: " +
      this.pages +
      "\nISBN: " +
      this.isbn +
      "\n-----"
    );
  };
}

//Array som håller alla böcker
let myBooks = [];
//böckerna jag hårdkodat in i min array
myBooks.push(new Book("Hard times", "Thriller", 150, 21214242342348));
myBooks.push(new Book("Anonymous Girl", "Novel", 560, 21434234234234));
myBooks.push(new Book("Stars", "Fantasy", 490, 98747778904234));

//Array som håller frågorna jag vill användaren ska se i prompt
var bookQuestions = ["Titel: ", "Topic: ", "Pages: ", "ISBN"];

//variable som håller antalet böcker användaren vill lägga till via prompt
let amountOfBooks = prompt("Please enter how many books you like to add");

//Array som håller variablerna jag vill att användarna ska ange om böckerna
let bookInfo = ["name", "subject", "pages", "isbn"];

//forloop som körs så länge i är mindre än antalet böcker användaren angav i "amountOfBooks"
for (var i = 0; i < amountOfBooks; i++) {
  let newBook = new Book(); // lägger till en instans av objektet Book så att användaren kan lägga till en ny bok
  for (var j = 0; j < bookQuestions.length; j++) {
    //kör längden av Arrayn "bookQuestions"(4)
    newBook[bookInfo[j]] = prompt(bookQuestions[j]);
  }
  myBooks.push(newBook); //här pushar jag upp den nya/nyss angivna boken till min Array myBooks som håller alla böcker
}
//här kör vi en loop genom min Array MyBooks som håller alla böcker och tillkallar metoden getBookInfo som på ett snyggt sätt spaltar upp informationen
myBooks.forEach((e) => console.log(e.getBookInfo()));
