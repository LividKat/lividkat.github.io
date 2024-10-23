import BiggerPicture from "bigger-picture";
import Macy from "macy";

// import style
import "bigger-picture/css";
import "./style.css";

// initialize BiggerPicture
let bp = BiggerPicture({
  target: document.body
});

// grab image links
let links = document.querySelectorAll("a");

// add click listener on links to open BiggerPicture
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", openBiggerPicture);
}

// function to open BiggerPicture
function openBiggerPicture(e) {
  e.preventDefault();
  bp.open({
    items: this,
    el: this
  });
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// masonry grid
Macy({
  container: "#vids",
  trueOrder: true,
  margin: 4,
  columns: 3,
  breakAt: {
    1000: {
      columns: 2
    }
  }
});