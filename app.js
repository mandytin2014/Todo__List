
let Add = document.querySelector(".btn__add");
let Todo = document.querySelector(".todo__list");
let List = document.querySelector(".list");
let task = document.querySelector(".todo__item");
let date = document.querySelector(".todo__date");

let data = JSON.parse(localStorage.getItem("dataList")) || [];

// 更新網頁內容
update(data);

// 刪除代辦事項
Todo.addEventListener("click", toggleData);


Add.addEventListener("click",e=>{
    
    e.preventDefault();
    // input框裡的值
    let task = document.querySelector(".todo__item").value;
    console.log(task)
    let date = document.querySelector(".todo__date").value;

    if(task == "" || date == ""){
        alert("Please fill out the form!")
        return;
    }
    let todo = {
        task:task,
        date:date
    }

    data.push(todo)
    // 更新網頁內容
    update(data);
    localStorage.setItem("dataList",JSON.stringify(data));
    
  
})

// 更新網頁內容
function update(items){

    str = "";
    items.forEach(function(item,index){
        str += `<li class="list" id="${index}">
        <p class="item">${item.task}</p>
        <p class="item">${item.date}</p>
        <button data-type="delete" class="delete"><i data-num =${index} class="fas fa-trash"></i></button>
        </li>`
    })

    Todo.innerHTML = str;
    task.value = "";
    date.value = "";
    
}

function toggleData(e){

    e.preventDefault();
    let type = e.target.dataset.type;

    if(type !== "delete"){
        return;
    }else{
        let order = e.target.dataset.num;
        console.log(this.children)

        data.splice(order,1)
        localStorage.setItem("dataList",JSON.stringify(data))
        update(data);

    }
}
