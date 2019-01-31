// forEach 

const forEach = (arr, callback) => {
  return arr.reduce((previousValue, currentValue, index, array) => {
    return previousValue.concat([ callback(currentValue, index, array) ]);  
  }, [])  
};

// end

//filter

const arr = [1, -1, 2, -2, 3];

arr.reduce((acc, current) => {
  if(current > 0)
  {acc.push(current);}
  return acc;
}, [])


/*const filter = (array, callback) => {
  return array.reduce((previousValue, currentValue, index, array) => {
    let newArr = [];
    if (callback(currentValue, index, array)) {
      newArr.push(currentValue); 
    }
    return newArr;
  }, []);
}

let arrn = filter(arr, (number) => {return number > 0});

console.log(arrn);*/


var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});


arr.reduce((item, i, arr) => {
  if (item) {
      item.push(i);
  }
  return item;
}, []);


var arr = [1, 1, -2];

// function isPositive(number) {
//   return number > 0;
// }

// console.log( arr.every(isPositive) );
// console.log( arr.some(isPositive) );

arr.reduce((acc, cur) => {
  console.log('!!!', cur);
  if (cur > 0 && acc === true) {
    return true;
  } else return false;
}, true);

// arr.reduce((acc, cur) => {
//   console.log('!!!', cur);
//   if (cur === true) {
//     return true;
//   } else return false;
// }, true);




// Every

var arr = [1, 1, -2];

function isPositive(number) {
  return number > 0;
}

// console.log( arr.every(isPositive) );

//version 1
// const every = (arr, callback) => {
//   return arr.reduce(function callback(acc, cur){
//     if (cur > 0 && acc === true) {
//       return true;
//     }
//     return false;
//   }, true);
// }

// version 2
// const every = (arr, callback) => {
//   return arr.reduce(function callback(acc, cur){
//     console.log('!!!', acc, 'cur', cur);
//     if (cur > 0 && acc > 0) {
//       return true;
//     }
//     return false;
//   });
// }

// version 3

const every = (f, arr) => {
  return arr.reduce((acc, cur) => {
    if (acc) {
      return f(cur);
    }

    return false;
  }, true);
};

every(n => n > 0, arr);

// end



// Some

var arr = [-1, -1, 2];

function isPositive(number) {
  return number > 0;
}

console.log( arr.some(isPositive) );

const some = (arr, callback) => {
  return arr.reduce(function callback(acc, cur, i, arr){
    console.log('!!!', acc, 'cur:', cur);
    if (acc > 0 || cur > 0) {
      return true;
    } 

    return false;
  });
}

some(arr);

const some = (f, arr) => {
  return arr.reduce((acc, cur) => {
    console.log('acc:', acc);
    console.log('cur:', cur);
    console.log('f:', f(cur));
    if (acc || cur) {
      return true;
    } 

    return f(cur);
  }, false);
}


// end


// test 

/* every
arr.reduce((acc, cur) => {
  console.log('!!!', cur);
  if (cur > 0 && acc === true) {
    return true;
  } else return false;
}, true);
*/
