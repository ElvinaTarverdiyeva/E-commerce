import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';


const AddToCart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart } = useCart();


    if (isEmpty) return (
        <>
            <div className="container-fluid pt-4 pb-4" style={{ "borderTop": "1px solid #ebebeb", "borderBottom": "1px solid #ebebeb" }}>
                <div className="container" style={{ "maxWidth": "1100px" }}>
                    <h1>Shopping Cart</h1>
                    <pre style={{ "fontSize": "12px", "color": "#a4a4a4" }}>Home  /  <span style={{ "color": "#ff6a28" }}>Shopping Cart</span></pre    >
                </div>
            </div>
            <div className="container mt-5" style={{ "maxWidth": "1100px" }}>
                <p style={{
                    "fontSize": "14px",
                    "color": "#747474"
                }}>Your cart is currently empty</p>
            </div>
        </>
    )


    return (
        <>


            <div className="container-fluid p-0">
                <div className="container-fluid pt-4 pb-4" style={{ "border-top": "1px solid #ebebeb", "border-bottom": "1px solid #ebebeb" }}>
                    <div className="container" style={{ "max-width": "1100px" }}>
                        <h1>Shopping Cart</h1>
                        <pre style={{ "font-size": "12px", "color": "#a4a4a4" }}>Home  /  <span style={{ "color": "#ff6a28" }}>Shopping Cart</span></pre    >
                    </div>
                </div>
                <div className="container addtocart d-flex flex-column justify-content-center">

                    <table>
                        <thead>
                            <tr>
                                <th className="imghead">Images</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                          
                                return (
                                    <tr className="tr-body" key={index}>
                                        <td className="image"><img src={item.img1} alt={item.title} /></td>
                                        <td className="product">{item.title}</td>
                                        <td className="price">{item.price}$</td>
                                        <td className="quantity">
                                            <span className="base">
                                                {item.quantity} <span className="flex">
                                                    <a onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><i className="fas fa-angle-up"></i></a> <a onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><i className="fas fa-angle-down"></i></a>
                                                </span>
                                            </span>
                                        </td>
                                        <td className="total">{item.price * item.quantity}$</td>
                                        <td className="delete"><a onClick={() => removeItem(item.id)}><i className="fas fa-times"></i></a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className="clear w-100">
                        <button className="clear-btn m-2" onClick={() => emptyCart()}>Clear Cart</button>
                    </div>



                </div>
                <div className="container cart-totals mt-5">
                    <div className="row main p-0">
                        <div className="col-md-6 left">

                            <div className="header"><h4>Coupon</h4></div> <br />


                            <p>Enter your coupon code if you have one.</p>
                            <form>
                                <input type="text" placeholder="Coupon code" /> <br />
                                <button>Apply Coupon</button>
                            </form>
                        </div>
                        <div className="col-md-6 right">
                            <div className="header">
                                <h4>Cart totals</h4>
                            </div>
                            <div className="subtotal">
                                <h6>Subtotal</h6>
                                <p>${cartTotal}</p>
                            </div>
                            <hr />
                            <div className="total">
                                <h4>Total</h4>
                                <p>${cartTotal}</p>
                            </div>
                            <div className="button">
                                <Link to="/Checkout">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart

