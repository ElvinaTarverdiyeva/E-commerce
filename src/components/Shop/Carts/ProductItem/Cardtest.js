import React, { Component } from 'react'
import ProductShow from './ProductShow'
import CartAbout from '../CartAbout'

export default class Cardtest extends Component {
    render() {
        return (
            <div>
                {CartAbout.productData.map((item, index) => {
                    if (index == 1) {
                        return (
                            <ProductShow img1={item.img1}
                                title={item.title}
                                faiz={item.faiz}
                                price={item.price}
                                pricedel={item.pricedel}
                                sku={item.sku}
                                about={item.about}
                                item={item}
                                key={index}
                            />
                        )
                    }
                })}
            </div>
        )
    }
}
