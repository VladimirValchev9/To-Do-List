const input = document.getElementById("input");
const list = document.getElementById("list");

function add(){
    if(input.value===''){
        alert("Incorrect input");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
    }
    input.value="";
}

list.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);