    let list=[{item:'Homework',
        dueDate:'10-12-2024',
    }];
    display();
    function  access(){
        let inputAccess=document.querySelector('.input-item');
        let inputValue=inputAccess.value;
        let accessDate=document.querySelector('.deterDate');
        let dateValue=accessDate.value;
        list.push({item:inputValue,dueDate:dateValue});
        inputAccess.value='';
        accessDate.value='';
        display();
    }               
function display(){
    let resultShow=document.querySelector('.container');
    let newHtml='';
    for(let i=0;i<list.length;i++){
        newHtml += `
        <span>${list[i].item}</span>
        <span>${list[i].dueDate}</span>
       
        <button onclick="list.splice(${i},1);
            display();"> Delete</button>
        `;
    }
    resultShow.innerHTML = newHtml;
}