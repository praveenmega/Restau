import React,{useState} from 'react';
import Carouselmain from './Carouselmain';
import {Button} from 'react-bootstrap';
import PizzaImg from './Assets/pizza.jpg';
import BurgerImg from './Assets/burger.jpg';
import WingImg from './Assets/wing.jpg';

const Homepage = ({addToCart}) => {

    const [products] = useState([
        {
          name: 'Pizza',
          price: 1500,
          image: PizzaImg
        },
        {
          name: 'Burger',
          price: 850,
          image: BurgerImg
        },
        {
          name: 'Chicken Wings(6pcs)',
          price: 600,
          image: WingImg
        }
      ])

    return (
        <>
            <main style={{marginTop:76}}>
                <Carouselmain/>
                <div>
                    {products.map((product,index) => {
                    return (
                        <div key={index} className="tc bgcolor dib br3 pa3 ma2 bw2 shadow-3">
                        <img className="tc" src={product.image} alt={product.name} width="300px" height="300px"/>
                        <div className="tc">
                        <h3>{product.name}</h3>
                        <h4>{product.price.toFixed(2)} Rs</h4>
                        <br />
                        <Button onClick={()=>addToCart(product)}>add to cart</Button>
                        </div>
                        </div>
                    );
                    })}
                </div>
            </main>
        </>
        );
    }

export default Homepage;