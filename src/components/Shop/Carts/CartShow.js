import React from 'react';
import {useCart} from 'react-use-cart'
import { Link } from 'react-router-dom';


const CartShow = (props) => {

    const {addItem} = useCart();

    const added = () => {
      addItem(props.item)
      alert("Added successfuly!")
    }

    return (
        <div className="cartdiv">
            <div className="imgdiv">
                <img src={props.img} alt="" className="img1" />
                <img src={props.img2} alt="" className="img2" />

                <p>{props.faiz}</p>
                <div className="hoverikon">
                    <a onClick={added}><i class="fas fa-shopping-bag"></i></a>
                    <i class="far fa-heart"></i>
                    <i class="fas fa-sliders-h"></i>
                </div>
                <Link to="/Cardtest" className="buutonlink">+Quick View</Link>
            </div>
            <div className="divsabout">
                <p className="classtitle">{props.title}</p>
                <div className="ikonsstar">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                </div>
                <span>£{props.price}</span>
                <del>{props.pricedel}</del>
                <div className="divp">
                    <p>SKU: <span>{props.sku}</span> </p>
                    <p>{props.about}</p>
                </div>
            </div>
        </div>
    )
}

export default CartShow;
