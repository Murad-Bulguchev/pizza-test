import React from 'react'
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";


const Home = () => {
    const [items, setItems] = React.useState([]) // 26
    const [isLoading, setIsLoading] = React.useState(true);// 33 создаем isLoading
    const [categoryId, setCategoryId] = React.useState(0) // 44
    const [sortType, setSortType] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    }) // 45
    console.log(sortType)


    React.useEffect(() => { // 29 useEffect позваляет отлавливать какие-то действия которые буде проиходить в нашем компоненте
        try {
            setIsLoading(true) // 49 делаем загрузку перед отправкой запроса
            fetch('https://640a0cbc6ecd4f9e18c34de3.mockapi.io/users?category=' + categoryId) //27 при помоши функции fetch делаем запрос на бэкенд
                .then(res => res.json()) // ждем пока ответ поступит, как только ответ поступит переконвертируем его
                .then((data) => {// и получим данные с бэк. // 28 Когда мы вызыв этого метода  setItems(data), у нас проиходит перерисовка.
                    // Перерисовка компонета - это когда state меняется , наш компонент должен перересоваться отобразить новые данные.
                    setItems(data)
                    setIsLoading(false) // 35 мы говорит отрендери мне пиццы и загрузка завершилась
                })
        } catch (error) {
            console.log(error)
        }

        window.scrollTo(0,0)

    },[categoryId, sortType /*48 если categoryId поменяется , только тогда делай запрос на бэкенд */]) // пустой массив означает что был первый render и что мы хотим выполнить это действие один раз // 47 мы говорим useEffect когда у тебя изменится state categoryId, делай вызов этого кода

    // 30 переходим в компонент Skeleton.jsx



    return (
        <div className="container">
            <div className="content__top">
                {/*6 зоносим в отдельные компонент <Categories/><Sort/> */}
                <Categories categoryId={categoryId} onClickCategory={(i) =>  setCategoryId(i)} /*46 прокидываем пропс categoryId сюда*/ />
                <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)} /*50 Делаем тоже самое что и в categoryId*/ />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/*7 Передаем  <PizzaBlock/> в отдельный компонент  */}
                {/*<PizzaBlock/>*/}
                {/*<PizzaBlock/>*/}
                {/*<PizzaBlock/>*/}
                {/*14 мы отренде наш массив pizzas*/}
                {
                    isLoading ? [...new Array(10)].map((_, index) => <Skeleton key={index}/>) : // 34 Если идет загрузка isLoading то мы создаем фейковый массив , его преврашаем массив Skeleton , если будет false то мы знаем то загрузка завершилась и renderem PizzaB;ock
                        items.map((obj) => <PizzaBlock
                            key={obj.id}
                            // imageUrl={obj.imageUrl}
                            // price={obj.price}
                            // title={obj.title}
                            // sizes={obj.sizes}
                            // types={obj.types}
                            {...obj} // можно использовать спредоператор для более краткого кода
                        />)
                }
            </div>
        </div>
    );
}

export default Home

// 37 Переходим в NotFound.jsx