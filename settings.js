$("#burger").click(()=>{
    $(".fly").fadeIn(2000)
    $("ul").toggleClass("fly")


})   
const button=Array.from ( document.querySelectorAll("button"))
 function setTheme(){
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click",()=>{
        if (button[i].innerHTML == "Earth") {
            document.querySelector("body").style.backgroundColor = "#76BA99"
            document.querySelector("ul").style.backgroundColor = "#876445"
            document.querySelector("ul").style.borderColor = "#EDDFB3"
            document.querySelector("div.themeColor").style.backgroundColor= "#876445"
            document.querySelector("div.themeColor").style.borderColor= "#EDDFB3"
           let h3= Array.from(document.querySelectorAll("h3"))
            for (let i= 0; i < h3.length; i++) {
                h3[i].style.color= "#EDDFB3"
                
            }
            let divs = Array.from(document.querySelectorAll("div"))
            for (let i = 0; i < divs.length; i++) {
                divs[0].style.borderColor = "#876445" 
                divs[1].style.backgroundColor= "#EDDFB3"  
                divs[2].style.backgroundColor= "#EDDFB3"  
            }
           let myButton = Array.from( document.querySelectorAll("button"))
            for (let i = 0; i < myButton.length; i++) {
               myButton[i].style.color ="#876445"
               myButton[i].style.backgroundColor = "#76BA99"
               myButton[i].style.borderColor = "#EDDFB3"
                
            }
        }
        if (button[i].innerHTML == "water") {
            document.querySelector("body").style.backgroundColor = "#2155CD"
            document.querySelector("ul").style.backgroundColor = "#79DAE8"
            document.querySelector("ul").style.borderColor = "#0AA1DD"
            document.querySelector("div.themeColor").style.backgroundColor= "#79DAE8"
            document.querySelector("div.themeColor").style.borderColor= "#0AA1DD"
           let h3= Array.from(document.querySelectorAll("h3"))
            for (let i= 0; i < h3.length; i++) {
                h3[i].style.color= "#2155CD"
                
            }
            let divs = Array.from(document.querySelectorAll("div"))
            for (let i = 0; i < divs.length; i++) {
                divs[0].style.borderColor = "#E88F9FD" 
                divs[1].style.backgroundColor= "#79DAE8"  
                divs[2].style.backgroundColor= "#79DAE8"  
            }
           let myButton = Array.from( document.querySelectorAll("button"))
            for (let i = 0; i < myButton.length; i++) {
               myButton[i].style.color ="#E8F9FD"
               myButton[i].style.backgroundColor = "#2155CD"
               myButton[i].style.borderColor = "#79DAE8"
                
            }
        }
      })
    }
}
setTheme()