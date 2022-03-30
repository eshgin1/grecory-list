'use strict';

const grecory = document.querySelector('.grecory_wrapper'),
      pen = document.querySelector('.pen'),
      inputText = document.querySelector('.input_text'),
      newtext = document.querySelector('.new_text');


// повесили обработчик события на pen что б при клике удалялся блок с новым текстом 
pen.addEventListener('click', () => {
    newtext.innerHTML = '';
})


// повесили "слушатель" на клавиатуру и событие 
inputText.addEventListener('keydown', (event) => {
    // если клавиша на которую мы нажали это Enter
    if(event.key == 'Enter'){
        addItem();//вызываем функцию с добавлением пункта 
        // cleanText();
        inputText.value =''; // потом очишаем поле ввода
    }
});

// создали функцию 
function addItem (){
    //создали переменную и поместили в него новый элемент с тегом p, который мы будем добавлять в тег который существует в html структуре
    let newItem = document.createElement('p');

    //в переменую присваеваем  значение inputText  
    newItem.innerHTML = "- " + inputText.value; 

    newtext.append(newItem);

    // при клике на новый созданный элемент зачеркиваем текст и так же убираем  
    newItem.addEventListener('click', ()=>{
        if(newItem.style.textDecoration != 'line-through'){
            newItem.style.textDecoration = 'line-through';
        } else{
            newItem.style.textDecoration = 'none';
        }
    });
}

// создали функцию очистки текста когда мы его отправляем 
// function cleanText(){
//     inputText.value ='';
// }