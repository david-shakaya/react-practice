import React from 'react'

//  Шаблон в который подставляем даннные с обьекта
const ProductCart = (props) => (
  <div>
  <img src={props.src} alt={props.alt} width="200px" />
  <h2>{props.title}</h2>
  <p>Автор: <a href={props.authorUrl}> {props.authorTag} </a></p>
  <p>Цена {props.price} кредитов</p>
  <p>Доступнось: {props.quantity >10?'Есть на складе':'Заканчивается!'}</p>  
  <button type="button">Добавить в корзину</button> 
  </div>
)
// Значение по умолчанию. Если не загрузилась картинка то используем эту
ProductCart.defaultProps = {
  src: "https://www.hot-motor.ru/body/clothes/images/no_icon.png"
}
export default ProductCart