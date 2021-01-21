import React from 'react';
import {Button,Form} from 'react-bootstrap';
import './Cartpage.css';

const Cartpage =({cart,removeFromCart,len}) => {
    const renderNothing=() => (
        <h1>Don't think just add to cart</h1>
    );

    const renderForm =() => {
        let total=cart.reduce((tot,product) => {
            return tot+product.price;
        },0)
        console.log(total)
        return(
            <div>
            <div style={{margin:20}}>
                <h3 style={{fontWeight:'bold'}}>Total : {total.toFixed(2)} Rs</h3>
            </div>
            <h1>Feel The Real Taste</h1>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3}  placeholder="Enter address" />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Checkout
                </Button>
            </Form>
            </div>
        );
    }
    return(
        <>
            <main style={{marginTop:76}}>
            {len ===0 && renderNothing()}
                 <div>
                    {cart.map((product,index) => {
                        return (
                            <div key={index} className="tc bgcolor dib br3 pa3 ma2 bw2 shadow-3">
                                <img className="tc" src={product.image} alt={product.name} width="300px" height="300px"/>
                                <div className="tc">
                                    <h3>{product.name}</h3>
                                    <h4>{product.price.toFixed(2)} Rs</h4>
                                    <br />
                                    <Button variant="danger" onClick={()=>removeFromCart(product)}>Remove</Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            {len !== 0 && renderForm()}
        </>
    );
}

export default Cartpage;
