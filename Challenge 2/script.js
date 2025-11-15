function remove(){
    const list = document.getElementById("list");
    list.removeChild(list.lastChild);
}

function add(){
    const item = prompt("Please enter an item"); //prompts user to input something

    if(item){
        const li = document.getElementById("list");

        li.textContent = item;
        document.getElementById("list").appendChild(li);
    }    
}