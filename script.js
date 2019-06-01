const panels = document.querySelectorAll(".panel");

function toggleOpen(){
  this.classList.toggle("open");
  this.classList.toggle("open-text");
}

function toggleText(){
  console.log(this.classList);
}

panels.forEach( panel => panel.addEventListener("click", toggleOpen))
panels.forEach( panel => panel.addEventListener("click", toggleText))
