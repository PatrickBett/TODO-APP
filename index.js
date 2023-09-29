

const containerHeader = document.querySelector(".container-header");
const containerTodo =document.querySelector(".container-todo")


containerTodo.addEventListener("click",function(e){
    e.preventDefault()
    const input = document.getElementById("input-value")
    const inputValue = document.getElementById("input-value").value
    
    
    //appending
    if (inputValue===""){
        input.value=""       
    }

    else{
        
        //const h3 = document.createElement('h3')
        const ul = document.querySelector('ul')//
        const li = document.createElement('li')//
        
        li.textContent = `${inputValue}`
        ul.appendChild(li)

//creating delete button**********
        const deleteButton = document.createElement('button')
        deleteButton.id = 'delete-list'
        deleteButton.innerText="delete"
        li.appendChild(deleteButton)  
        deleteButton.addEventListener("click",function(e){
        e.target.parentElement.remove()
        saveData();
        
            
     });      
    
      

    }

    
    input.value = "";
    saveData() ;
    
});






const ulInnerContent = document.querySelector('ul')
function saveData(){    
    localStorage.setItem("data",ulInnerContent.innerHTML)
}

function showData(){
    ulInnerContent.innerHTML=localStorage.getItem("data")    
}

showData()