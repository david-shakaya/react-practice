import React from 'react'
import ProductCart from './components/Product-card'

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
const App = () => {
    return (
        <div>
            <h1>Главный компонент-контейнер страницы</h1>
            <ProductCart
                src={obj.url}
                alt={obj.title}
                title={obj.title}
                price={obj.price}
            />
            <ProductCart
            src="https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg"
                alt="Product N-2"
                title="Product N-2"
                price={304}
            />
        </div>
    )
}

export default App