
let text = document.getElementById("text");    
let submitBTN = document.getElementById("submitBTN");
let feedBack = document.getElementById("feedBack");
let error = document.querySelector(".error");
let helloW = document.getElementById("helloW")

submitBTN.addEventListener("click", function(e){    
    
    e.preventDefault()
    let paragrafh = document.createElement("p");

    feedBack.appendChild(paragrafh)
    if(text.value === '')
    {
        error.classList.add("show")
        setTimeout(function(){
            error.classList.remove("show")
        },4000)
    }
    else{
        paragrafh.innerHTML = text.value
        text.value = ""  
    }

    paragrafh.addEventListener("dblclick", function(){
        feedBack.removeChild(paragrafh) 
    })

    
})


helloW.addEventListener("click", function(){
    helloW.style.display = "none"
})
