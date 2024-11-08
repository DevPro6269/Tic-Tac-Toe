let playbox = document.querySelectorAll(".playbox");
let count = 2;
let button = document.querySelector("#Restart");
let anna = document.querySelector(".anna")
playbox.forEach((e) => {
  e.addEventListener("click", function () {
    if (true) {
      if (this.innerHTML == "<h1></h1>"&&anna.innerText=="") {
        this.innerHTML = "<h1>X</h1>";
        gamecondition();
        setTimeout(computerturn,300)
        
      }
       } 
  });
});

let arr=[]
function computerturn() {
  let emptyCells = [];
  playbox.forEach((e, index) => {
    if (e.innerHTML === "<h1></h1>") {
      emptyCells.push(index);
    }
  });

  const winningPatterns = [
    { check: [0, 2], place: 1 },
    { check: [0, 1], place: 2 },
    { check: [0, 3], place: 6 },
    { check: [0, 6], place: 3 },
    { check: [0, 8], place: 4 },
    { check: [0, 4], place: 8 },
    { check: [2, 4], place: 6 },
    { check: [6, 8], place: 7 },
    { check: [6, 7], place: 8 },
    { check: [2, 5], place: 8 },
    { check: [2, 6], place: 4 },
    { check: [4, 5], place: 3 },
  ];

  const matchedPattern = winningPatterns.find(
    ({ check, place }) =>
      playbox[check[0]].innerHTML === "<h1>X</h1>" &&
      playbox[check[1]].innerHTML === "<h1>X</h1>" &&
      playbox[place].innerHTML === "<h1></h1>"
  );

  if (matchedPattern) {
    playbox[matchedPattern.place].innerHTML = "<h1>O</h1>";
  } else if (emptyCells.length > 0 && anna.innerText === "") {
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    playbox[emptyCells[randomIndex]].innerHTML = "<h1>O</h1>";
  }

  gamecondition();
}



function gamecondition() {
  let playbox = document.querySelectorAll(".playbox");
  let A = playbox[0].innerText;
  let B = playbox[1].innerText;
  let C = playbox[2].innerText;
  let D = playbox[3].innerText;
  let E = playbox[4].innerText;
  let F = playbox[5].innerText;
  let G = playbox[6].innerText;
  let H = playbox[7].innerText;
  let I = playbox[8].innerText;

  if (A != "" && B != "" && C != "") {
    if (A == B && B == C && C == A) {
      console.log("winner");
      playbox[0].style.backgroundColor="green"
      playbox[1].style.backgroundColor="green"
      playbox[2].style.backgroundColor="green"
      button.innerText="New game";
      button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[0].innerText}`
      count++;
      
    }
  }

  if (A != "" && D != "" && G != "") {
    if (A == D && D == G && G == A) {
      console.log("winner");
      playbox[0].style.backgroundColor="green"
      playbox[3].style.backgroundColor="green"
      playbox[6].style.backgroundColor="green"
       button.innerText="New game";
       button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[0].innerText}`
      count++;
    }
  }

  if (A != "" && E != "" && I != "") {
    if (A == E && E == I && I == A) {
      console.log("winner");
      playbox[0].style.backgroundColor="green"
      playbox[4].style.backgroundColor="green"
      playbox[8].style.backgroundColor="green"
       button.innerText="New game";
       button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[0].innerText}`
      count++;
    }
  }

  if (B != "" && E != "" && H != "") {
    if (B == E && E == H && H == B) {
      console.log("winner");
      playbox[1].style.backgroundColor="green"
      playbox[4].style.backgroundColor="green"
      playbox[7].style.backgroundColor="green"
      button.innerText="New game";
      button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[1].innerText}`
      count++;
    }
  }

  if (C != "" && E != "" && G != "") {
    if (C == E && E == G && G == C) {
      console.log("winner");
      playbox[2].style.backgroundColor="green"
      playbox[4].style.backgroundColor="green"
      playbox[6].style.backgroundColor="green"
      button.innerText="New game";
      button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[2].innerText}`
      count++
    }
  }

  if (C != "" && F != "" && I != "") {
    if (C == F && F == I && I == F) {
      console.log("winner");
      playbox[2].style.backgroundColor="green"
      playbox[5].style.backgroundColor="green"
      playbox[8].style.backgroundColor="green"
      button.innerText="New game";
      button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[2].innerText}`
      count++
    }
  }
  if (D != "" && E != "" && F != "") {
    if (D == E && F == E && D == F) {
      console.log("winner");
      playbox[3].style.backgroundColor="green"
      playbox[4].style.backgroundColor="green"
      playbox[5].style.backgroundColor="green"
      button.innerText="New game";
      button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[3].innerText}`
      count++
    }
  }

  if (G != "" && H != "" && I != "") {
    if (G == H && H == I && I == G) {
      console.log("winner");
      playbox[6].style.backgroundColor="green"
      playbox[7].style.backgroundColor="green"
      playbox[8].style.backgroundColor="green"
      button.innerText="New game";
      button.style.backgroundColor="white"
      anna.innerText=`winner is ${playbox[7].innerText}`
      count++
    }
  }
if(A!=""&&B!=""&&C!=""&&D!=""&&E!=""&&F!=""&&G!=""&&H!=""&&I!=""&&!anna.innerText.includes("winner")){
    anna.innerText=`Game draw`
    button.innerText="New game";
    count++
}
}

button.addEventListener("click", function (e) {
  
  let playbox = document.querySelectorAll(".playbox");
    anna.innerText=""
      button.style.backgroundColor="aquamarine"
    button.innerText="Reset"
    playbox.forEach((e)=>e.style.backgroundColor="black")
  playbox.forEach((e) => (e.innerHTML = "<h1></h1>"));
 
});
