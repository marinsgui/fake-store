import { useEffect, useState } from 'react';
import style from './Home.module.css';

export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <main>
            <div>
                
            </div>
            <ul className={style.products_list}>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt="Product image" />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}