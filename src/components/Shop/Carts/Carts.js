import React, { useState } from 'react'
import CartShow from './CartShow'
import CartAbout from './CartAbout'




const Carts = () => {
    const [appstate, changeState] = useState({
        activeObject: 1,
        objects1: 1,
        objects2: 0
    });
    function Sortrow() {
        changeState({ ...appstate, activeObject: appstate.objects1 });
        document.getElementById("ikon1").style.color = "black";
        document.getElementById("ikon2").style.color = "#dbdbdb";
    }
    function Sortcol() {
        changeState({ ...appstate, activeObject: appstate.objects0 });
        document.getElementById("ikon2").style.color = "black";
        document.getElementById("ikon1").style.color = "#dbdbdb";
    }
    function ActiveSortstyle() {
        if (appstate.objects1 === appstate.activeObject) {
            return "sec1"
        } else {
            return "sec2"
        }
    }
    return (
        <div>
            <div>
                <div className="row mt-5">
                    <div className="col-md-7 cardhedikons">
                        <i class="fas fa-th-large" onClick={Sortrow} id="ikon1"></i>
                        <i class="fas fa-list-ul" onClick={Sortcol} id="ikon2"></i>
                    </div>
                    <div className="col-md-3 carddropdown">
                        <p>Sort By:</p>
                        <select name="" id="">
                            <option value="Default sorting">Default sorting</option>
                            <option value="Sort by popularity">Sort by popularity</option>
                            <option value="Sort by average rating">Sort by average rating</option>
                            <option value="Sort by latest">Sort by latest</option>
                            <option value="Sort by price: low to higt">Sort by price: low to higt</option>
                            <option value="Sort by price:higt to how">Sort by price:higt to how</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <p>Showing 1-12 of 30 results</p>
                    </div>
                </div>
            </div>
            <div className="container pt-4">
                <div className={ActiveSortstyle()} id="sec1">
                    {CartAbout.productData.map((item, index) => {
                        return (
                            <CartShow img={item.img1}
                                img2={item.img2}
                                title={item.title}
                                faiz={item.faiz}
                                price={item.price}
                                sku={item.sku}
                                about={item.about}
                                pricedel={item.pricedel}
                                item={item}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carts