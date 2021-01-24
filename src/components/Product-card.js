import React from 'react'

//  Шаблон в который подставляем даннные с обьекта
const ProductCart = (props) => {
    return (<div>
  <img src={props.src} alt={props.alt} width="300px" />
  <h2>{props.title}</h2>
  {/* <p>Автор: <a href={obj.author.url}> {obj.author.tag} </a></p> */}
  <p>Цена {props.price} кредитов</p>
  <button type="button">Добавить в корзину</button> 
</div>)
}

export default ProductCart