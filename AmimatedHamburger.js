const list = document.querySelector('ul');

list.addEventListener("click",() =>{
    if(list.classList.contains("active")){
        (list.classList.remove("active"))
    }
    else{
        list.classList.add("active")
    }
})