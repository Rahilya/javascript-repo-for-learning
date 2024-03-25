// const coding = ["js", "ruby", "c++"];

// const items = coding.forEach((value) => console.log(value));

// console.log(items);  //for each doesnot return values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "History",
    publishedYear: 1980,
    edition: 2002,
  },
  {
    title: "Book Two",
    genre: "Fiction",
    publishedYear: 1992,
    edition: 1995,
  },
  {
    title: "Book Three",
    genre: "Science Fiction",
    publishedYear: 2005,
    edition: 2010,
  },
  {
    title: "Book Four",
    genre: "Thriller",
    publishedYear: 2015,
    edition: 2018,
  },
  {
    title: "Book Five",
    genre: "Fantasy",
    publishedYear: 2008,
    edition: 2012,
  },
  {
    title: "Book Six",
    genre: "Mystery",
    publishedYear: 1999,
    edition: 2004,
  },
  {
    title: "Book Seven",
    genre: "Romance",
    publishedYear: 2010,
    edition: 2014,
  },
  {
    title: "Book Eight",
    genre: "Biography",
    publishedYear: 1985,
    edition: 1990,
  },
  {
    title: "Book Nine",
    genre: "Self-Help",
    publishedYear: 2001,
    edition: 2006,
  },
  {
    title: "Book Ten",
    genre: "Horror",
    publishedYear: 1978,
    edition: 1983,
  },
  {
    title: "Book Eleven",
    genre: "Poetry",
    publishedYear: 2019,
    edition: 2021,
  },
  {
    title: "Book Twelve",
    genre: "Philosophy",
    publishedYear: 1995,
    edition: 2000,
  },
];

let myBooks = books.filter((bk) => bk.genre === "Philosophy");

myBooks = books.filter((bk) => {
  return bk.publishedYear >= 1995 && bk.genre === "Romance";
});
console.log(myBooks);
