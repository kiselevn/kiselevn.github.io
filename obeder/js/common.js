// скрытие формы переключателем
var rad = document.switchesForm.switch;
var prev = null;
var content = document.getElementsByClassName("content");

for(var i = 0; i < rad.length; i++) {
  rad[i].onclick = function() {
    if(this !== prev) {
      prev = this;
    }
    if (this.value == 'off') {
      for(var i=0; i<content.length; i++)content[i].style.display = 'none';
    } else {
      for(var i=0; i<content.length; i++)content[i].style.display = 'grid';
    }
  };
};