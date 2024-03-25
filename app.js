const inputbox=document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputbox.value===''){
        alert("You must write something!");
    }else{
        // tạo ra một thẻ li
        let li=document.createElement("li");
        // gán giá trị của thẻ li bằng giá trị của inputbox
        li.innerHTML=inputbox.value
        // hiển thị thẻ li trong list-container
        listContainer.appendChild(li);
    }  
}