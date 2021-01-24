import React from 'react'
//  Обект со свойствами (ОН ДОЛЖЕН НАХОДИТЬСЯ В ДРУГОМ ФАЙЛЕ но пока так)
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
const ProductCart = () => {
    return (<div>
  <img src={obj.url} alt={obj.title} width="300px" />
  <h2>{obj.title}</h2>
  <p>Автор: <a href={obj.author.url}> {obj.author.tag} </a></p>
  <p>Цена {obj.price} кредитов</p>
  <button type="button">Добавить в корзину</button>
</div>)
}

export default ProductCart