import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
// ПОсле установки реакта удаляем все ненужно в папке src. Оставляем там только index.js

 /* 
 * - Лучший способ рендера
 * - App это главный файл которы мы рендерим. 
 * В него мы импортируем остальные компоненты которые должны быить на странице
  */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

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
// Она находиться в папке Компонеті продукт карт
// Рендер в ДОМ - Но лучше так как віше

/* 
* - Создаем Components
 */


 /* ------------Остановился на 01.19 ------ */