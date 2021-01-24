import React from 'react';
import ReactDOM from 'react-dom'
// ПОсле установки реакта удаляем все ненужно в папке src. Оставляем там только index.js



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/* 
*  Создаем КОМПОНЕНТ,ссылку(а).Вторым параметром передаем обьект настроек, это могут быть атрибуты теговб,
*  третий параметр это дети. То что будет внктри ссылки
* - Обект настроек - это ПРОПСЫ компонента.
 */
// const link = React.createElement('a', { href: 'https://www.google.com.ua/?hl=ru', target: '_blank' }, 'ссылка на ГУГЛ')

// Добавляем созданный компонент в ДОМ
// ReactDOM.render(link, document.querySelector('#root'))

/* 
* - Более удобный вариант (наз jsx-выражение)
*/
// Можно создать просто HTML разметку и бабил под капотом трансформирует её React.createElement
// const jsxLink = <a href="https://www.google.com.ua/?hl=ru" target="blank">сылка на ГУГЛ</a>

// ReactDOM.render(jsxLink, document.querySelector('#root'))

/* 
* Делаем более сложную разметку(карточку товара)
 */

//  Обект со свойствами
 const obj={
    id: "id-1",
    url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    title: "Feathers. Art abstract",
    price: 500,
    author: {
      tag: "ractapopulous",
      url: "https://pixabay.com/users/ractapopulous-24766/"
    },
    quantity: 10
 }

//  Шаблон в который подставляем даннные с обьекта
const template = (<div>
  <img src={obj.url} alt={obj.title} width="300px" />
  <h2>{obj.title}</h2>
  <p>Автор: <a href={obj.author.url}> {obj.author.tag} </a></p>
  <p>Цена {obj.price} кредитов</p>
  <button type="button">Добавить в корзину</button>
</div>)

// Рендер в ДОМ
ReactDOM.render(template, document.querySelector('#root'))

/* 
* - Создаем Components
 */