const floorUp = document.getElementById("floorUp");
const floorDown = document.getElementById("floorDown");

floorUp.addEventListener("click", (a) => {
  elevator.upOneFloor();
});

floorDown.addEventListener("click", (a) => {
  elevator.downOneFloor();
});
console.log(floor7.innerText);

let lift = document.getElementById("lift");
let marginTop = 770;


function culcUp(){
  return (marginTop -= 27)
}
function culcDown(){
  return (marginTop += 27)
}

let elevator = {
  current: 1,
  minFloor: 1,
  maxFloor: 16,
  printFloor() {
    console.log(this.current);
  },
  upOneFloor() {
    if (this.current < this.maxFloor) {
      this.current++;
      lift.style.marginTop = `${culcUp()}px`;
      this.printFloor();
    } else {
      console.error("Error!");
    }
  },
  downOneFloor(){
    if(this.current > this.minFloor){
      this.current--;
      lift.style.marginTop = `${culcDown()}px`
      this.printFloor();
    }else{
      console.log("Error!");
    }
  },
  toFloor(floor){
    if(floor >= this.minFloor && floor <= this.maxFloor){
      while (this.current < floor) {
        this.upOneFloor();
      }
      while (this.current > floor){
        this.downOneFloor();
      }
    }else{
      console.log("Error!");
    }
  }
}
document.addEventListener("click", e => {
  elevator.toFloor(e.target.innerText);
});
