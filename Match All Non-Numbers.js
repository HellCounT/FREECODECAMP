let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig; // Change this line
let result = movieName.match(noNumRegex).length;
