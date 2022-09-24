let count=0
let countEl= document.getElementById("number-el")
let peopleEl=document.getElementById("people-entered")


function increase(){
    


    count= count+1
    countEl.innerText= count
}

function save(){


    let countstr= count + " - "
   peopleEl.textContent += countstr
   countEl.innerText=0
   count=0
}