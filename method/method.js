// forEach 
const arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//   console.log( i + ": " + item + " (массив:" + arr + ")" );
// });

const forEach = (f, arr) => {
  return arr.reduce((acc, cur, i, array) => {
    return f(cur, i , array);
  }, []);
};

forEach((item,i, arr) => {console.log(i + ": " + item + " (массив:" + arr + ")" )} , arr);

// end


//filter

const arr = [1, -1, 2, -2, 3];

// const positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// console.log( positiveArr );


const filter = (f, arr) => {
  return arr.reduce((acc, cur, i , array) => {
    if(f(cur)){
      acc.push(cur);
    }
    return acc;
  }, []); 
}


filter(n => n > 0, arr);

// end

// map 
const names = ['HTML', 'CSS', 'JavaScript'];

// const nameLengths = names.map(function(name) {
//   return name.length;
// });

// получили массив с длинами
// console.log( nameLengths ); // 4,3,10


const map = (f, arr) => {
  return arr.reduce((acc, cur, i, array) => {
    acc.push(f(cur, i, array));
    return acc;
  }, []);
};

map(n => n.length, names);

// end


// Every

const arr = [1, 1, -2];

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

// version 3 correct

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

const arr = [1, 2, 8, -2];

function isPositive(number) {
  return number < 0;
}

// console.log( arr.some(isPositive) );

const some = (f, arr) => {
  return arr.reduce((acc, cur, i, array) => {
    if(acc || f(cur)){
      return true;
    }

    return false;
  }, false);
}

some(n => n > 0, arr);

// end

