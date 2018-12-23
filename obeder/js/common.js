var rad = document.swithesForm.switch;
var prev = null;
var elems = document.getElementsByClassName("content");
for(var i = 0; i < rad.length; i++) {
  rad[i].onclick = function() {
    (prev)? console.log(prev.value):null;
    if(this !== prev) {
      prev = this;
    }
    console.log(this.value);
    if (this.value == 'off') {
      for(var i=0; i<elems.length; i++)elems[i].style.display = 'none';
    } else {
      for(var i=0; i<elems.length; i++)elems[i].style.display = 'grid';
    }
  };
};