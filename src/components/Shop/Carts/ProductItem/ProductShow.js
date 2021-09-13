import React, { Component } from 'react'


const ProductShow = (props) => {
        return (
            <div>
                <div className="productdiv" >
                    <div className="row">
                        <div className="col-md-5">
                            <img src={props.img1} alt=""  />
                        </div>
                        <div className="col-md-7 proabout">
                            <h5>{props.title}</h5>
                            <div className="ikons">
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>(1 customer review)</span>
                            </div>
                            <h6>${props.price}</h6>
                            <p className="about">{props.about}</p>
                            <hr />
                            <p>Availability: <span> 93 In Stock</span></p>
                            <input type="number" min="0" max="10" defaultValue="1" />
                            <button >Add To Cart</button> <br />
                            <i class="far fa-heart">Add To Wishlist</i>
                            <i class="fas fa-sliders-h">Compare</i>
                            <p>SKU: <span>{props.sku}</span> </p>
                            <p>Categories: <span> Clothings, Men</span></p>
                            <div className="divikon5">
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-twitter-square"></i>
                                <i class="fab fa-pinterest-square"></i>
                                <i class="fab fa-google-plus-square"></i>
                                <i class="fab fa-linkedin"></i>
                            </div>

                        </div>
                        <div className="col-md-5 imgslider">
                            <i class="fas fa-angle-left"></i>
                            <div className="imgs">
                            <img src="http://demo.roadthemes.com/mooboo/wp-content/uploads/2018/12/2-2-300x353.jpg" alt="" />
                            <img src="http://demo.roadthemes.com/mooboo/wp-content/uploads/2018/12/2-2-300x353.jpg" alt="" />
                            <img src="http://demo.roadthemes.com/mooboo/wp-content/uploads/2018/12/2-2-300x353.jpg" alt="" />
                            <img src="http://demo.roadthemes.com/mooboo/wp-content/uploads/2018/12/2-2-300x353.jpg" alt="" />
                            </div>
                            <i class="fas fa-angle-right"></i>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    export default ProductShow;
