let todList = [{
            item: 'buy milk',
            dueDate: '03/11/2024'
      },
      {
            item: 'go to college',
            dueDate: '03/11/2024'
      }
];
displayItem();
// takes the input
function addTodo() {
      let inputElement = document.querySelector('#todo-input');
      let todoItem = inputElement.value;
      let containDate = document.querySelector('#readDate');
      let inputDate = containDate.value;
      todList.push({item:todoItem,dueDate:inputDate});
      inputElement.value = '';
      inputDate='';
      displayItem();

}
// show the output
function displayItem() {
      let containerElement = document.querySelector('#todo-container');
      let newHtml = '';
      for (let i = 0; i < todList.length; i++) {
            newHtml += `
            <div>
            <span>${todList[i].item}</span>
            <span>${todList[i].dueDate}</span>
            <button onclick="todList.splice(${i},1);
            displayItem();"> Delete</button>
            </div>
            `;
      }
      containerElement.innerHTML = newHtml;
}