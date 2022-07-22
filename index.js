

const boxes=Array.from (document.querySelectorAll(".children"));
let X="X"
let O= "O"
currentText = X
const winningCombo=[
        [0,1,2],
        [0,3,6],
        [2,5,8],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [1,4,7],
        [3,4,5]
]
     function play1(){
                for(let i=0; i<boxes.length; i++){
                        boxes[i].addEventListener("click",(e)=>{
                               if (boxes[i].innerHTML.trim() != "") return
                                       boxes[i].innerHTML= currentText
                                       playerHasone()
                                       currentText= currentText == "X"? "O": "X"       
                            })
                        }         
        }    
        play1()
        function playerHasone(){
              winningCombo.forEach(element => {
                let check = element.every(idx => boxes[idx].innerHTML.trim()== currentText)
                if (check) {
                       document.querySelector("div h1").innerHTML = currentText +" " + "has won"
                        highlightCells(element);
                        document.querySelector("div h1").classList.add("animate")
                }
              });                   
        }
        function highlightCells(element){
                element.forEach(idx=>{
                 boxes[idx].classList.add("highlight")
                })
        }
document.querySelector("input").addEventListener("click",
()=>{
        window.location.reload()
})

$("#burger").click(()=>{
        $(".fly").fadeIn(2000)
        $("ul").toggleClass("fly")
  

})                