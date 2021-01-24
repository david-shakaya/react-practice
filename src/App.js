import React from 'react'
import ProductCart from './components/Product-card'
import paintings from './paintings.json'


//  Обект со свойствами (ОН ДОЛЖЕН НАХОДИТЬСЯ В ДРУГОМ ФАЙЛЕ но пока так)
 
const App = () => {
    return (
        <div>
            <h1>Главный компонент-контейнер страницы</h1>
            <ProductCart
                src={paintings[0].url}
                alt={paintings[0].title}
                title={paintings[0].title}
                price={paintings[0].price}
                authorUrl={paintings[0].author.url}
                authorTag={paintings[0].author.tag}
                quantity={paintings[0].quantity}
            />
            <ProductCart
            src="https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg"
                alt="Product N-2"
                title="Product N-2"
                price={304}
                authorUrl="SuperMan"
                authorTag="TerraNova"
                quantity={3}
            />
        </div>
    )
}

export default App