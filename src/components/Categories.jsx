import React from 'react'

const Categories = ({ categoryId, onClickCategory }) => {
    console.log(categoryId)
    const [activeIndex,setActiveIndex] = React.useState(0)
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'] // 10 рендеринг списка 

    
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName, i) => {
                        // Ключи помогают React определять, какие элементы были изменены, добавлены или удалены.
                       return <li key={i} // если список статичный в нашем случаи можно передовать index, если он меняется то так передвать не стоит
                           onClick={() => onClickCategory(i)} className={categoryId === i ? 'active': ''}>
                           {categoryName}
                       </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories // 11 передаем массив категории пицц в assets / img pizzas.json