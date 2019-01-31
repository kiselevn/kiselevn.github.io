// forEach 

const forEach = (f, arr) => {
  return arr.reduce((acc, cur, i, array) => {
    return f(cur, i , array);
  }, []);
};

// end


//filter

const filter = (f, arr) => {
  return arr.reduce((acc, cur, i , array) => {
    if(f(cur)){
      acc.push(cur);
    }
    return acc;
  }, []); 
}

// end

// map 

const map = (f, arr) => {
  return arr.reduce((acc, cur, i, array) => {
    acc.push(f(cur, i, array));
    return acc;
  }, []);
};

// end


// Every

const every = (f, arr) => {
  return arr.reduce((acc, cur) => {
    if (acc) {
      return f(cur);
    }

    return false;
  }, true);
};

// end


// Some

const some = (f, arr) => {
  return arr.reduce((acc, cur, i, array) => {
    if(acc || f(cur)){
      return true;
    }

    return false;
  }, false);
}

// end

module.exports = {
  forEach,
  filter,
  map,
  every,
  some,
};