
let form=document.querySelector("#form");
let btn=document.querySelector("#addTask");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");
let p3=document.querySelector("#p3");
let p4=document.querySelector("#p4");
let p5=document.querySelector("#p5");
let p6=document.querySelector("#p6");
let p7=document.querySelector("#p7");
let p8=document.querySelector("#p8");
let removeTask1=document.querySelector("#remove1");
let removeTask2=document.querySelector("#remove2");
let removeTask3=document.querySelector("#remove3");
let removeTask4=document.querySelector("#remove4");
let removeTask5=document.querySelector("#remove5");
let removeTask6=document.querySelector("#remove6");
let removeTask7=document.querySelector("#remove7");
let removeTask8=document.querySelector("#remove8");



btn.addEventListener("click",()=>{
    if(form.value==="")
    {
       alert("enter task");
       
    }
    else{
        if(p1.innerHTML==="")
        {
           p1.innerHTML=form.value;
            saveData();
            
            form.value="";

        }
        else if(p2.innerText==="")
        {
            p2.innerText=form.value; 
            saveData();
            form.value="";
        }
        else if(p3.innerText==="")
            {
                p3.innerText=form.value; 
                saveData();
                form.value="";
            }
            else if(p4.innerText==="")
                {
                    p4.innerText=form.value; 
                    form.value="";
                }
                else if(p5.innerText==="")
                    {
                        p5.innerText=form.value; 
                        form.value="";
                    }
                    else if(p6.innerText==="")
                        {
                            p6.innerText=form.value; 
                            form.value="";
                        }
                        else if(p7.innerText==="")
                            {
                                p7.innerText=form.value; 
                                form.value="";
                            }
                            else if(p8.innerText==="")
                                {
                                    p8.innerText=form.value; 
                                    form.value="";
                                }
        else{
          alert("delete some task")
        }
    }
    
   
})

 function removeTask10(){
    localStorage.removeItem("task");
}

function removeTask20(){
    localStorage.removeItem("task1");
}

function removeTask30(){
    localStorage.removeItem("task2");
}

function removeTask40(){
    localStorage.removeItem("task3");
}

function removeTask50(){
    localStorage.removeItem("task4");
}

function removeTask60(){
    localStorage.removeItem("task5");
}

function removeTask70(){
    localStorage.removeItem("task6");
}

function removeTask80(){
    localStorage.removeItem("task7");
}

removeTask1.addEventListener("click",()=>{
    if(p1.innerHTML!=="")
        {
            p1.innerHTML="";
           removeTask10();
           removeTask1.disabled=true;
        }
});

removeTask2.addEventListener("click",()=>{
    if(p2.innerHTML!=="")
        {
            p2.innerHTML="";
           removeTask20();
        }
});
removeTask3.addEventListener("click",()=>{
    if(p1.innerHTML!=="")
        {
            p3.innerHTML="";
           removeTask30();
        }
});
removeTask4.addEventListener("click",()=>{
    if(p4.innerHTML!=="")
        {
            p4.innerHTML="";
           removeTask40();
        }
});
removeTask5.addEventListener("click",()=>{
    if(p5.innerHTML!=="")
        {
            p5.innerHTML="";
           removeTask50();
        }
});
removeTask6.addEventListener("click",()=>{
    if(p6.innerHTML!=="")
        {
            p6.innerHTML="";
           removeTask60();
        }
});
removeTask7.addEventListener("click",()=>{
    if(p7.innerHTML!=="")
        {
            p7.innerHTML="";
           removeTask70();
        }
});
removeTask8.addEventListener("click",()=>{
    if(p8.innerHTML!=="")
        {
            p8.innerHTML="";
           removeTask80();
        }
});




function saveData(){
    localStorage.setItem("task",p1.innerHTML);
    localStorage.setItem("task1",p2.innerHTML);
    localStorage.setItem("task2",p3.innerHTML);
    localStorage.setItem("task3",p4.innerHTML);
    localStorage.setItem("task4",p5.innerHTML);
    localStorage.setItem("task5",p6.innerHTML);
    localStorage.setItem("task6",p7.innerHTML);
    localStorage.setItem("task7",p8.innerHTML);
};

function showData(){
    p1.innerHTML=localStorage.getItem("task"); 
    p2.innerHTML=localStorage.getItem("task1"); 
    p3.innerHTML=localStorage.getItem("task2"); 
    p4.innerHTML=localStorage.getItem("task3"); 
    p5.innerHTML=localStorage.getItem("task4"); 
    p6.innerHTML=localStorage.getItem("task5"); 
    p7.innerHTML=localStorage.getItem("task6"); 
    p8.innerHTML=localStorage.getItem("task7"); 
};
showData();

