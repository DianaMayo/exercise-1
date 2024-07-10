import React, { Children } from "react";

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

  
function Unroll(square){
  let unrolled = []
  while (square.length > 0) {
  // grab top row
      unrolled = [...unrolled, square.shift()]
  // grab right column
      unrolled = [...unrolled, square.map(row => row.pop())]
  // grab bottom row and reverse it
      unrolled = [...unrolled, square.pop().reverse()]
  // grab left column and reverse it
      unrolled = [...unrolled, square.map(row => row.shift()).reverse()]
  }
  return unrolled.flat()
  }
  


 console.log(Unroll(square))


export default Unroll;
