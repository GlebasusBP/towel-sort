
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];

  if(matrix){
    matrix.forEach( (arr, i) => {
      if((i+1)%2 === 0){
        arr.reverse().forEach( e => {
        res.push(e);
        })
      } else {
        arr.forEach( e => {
        res.push(e);
        }) 
      }
    })
  } else {
    return [];
  }
 
  return res;
}