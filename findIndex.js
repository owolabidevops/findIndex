//it does what it says gives  you the index value is present and if it not present

const numbers=[1, 2, 3, 4, 10];
 const num =numbers.findIndex(x => x===4);//returns 3 the index of 4 is 3
 const num1 =numbers.findIndex(x => x===15);//returns -1 