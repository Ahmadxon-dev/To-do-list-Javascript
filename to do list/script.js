let inputvalue = document.getElementById("input").value;
let button = document.querySelector(".add");
var tasks = document.querySelector(".tasks");
button.addEventListener("click", function(){
    

    if(input.value != ""){
        var div = document.createElement("div");
        var indiv = document.createElement("li");
        indiv.innerText = input.value;
        var span = document.createElement("span");
        var i = document.createElement("i");
        i.classList.add("fa-solid");
        i.classList.add("close");
        i.classList.add("fa-x");
        span.appendChild(i);
        tasks.appendChild(div);
        div.appendChild(indiv);
        div.appendChild(i);
        div.classList.add("li");
        indiv.classList.add("l");
        input.value="";
    }

    else{
        alert("maydonni to'ldirign");
    }

    i.addEventListener("click", () =>{
        tasks.removeChild(div);
    })
 

    
    document.getElementsByClassName("fa-x").addEventListener("click", function(){
        tasks.removeChild(document.querySelector(".li"));
    })
    
})


document.querySelector(".tasks").addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
}, false)


