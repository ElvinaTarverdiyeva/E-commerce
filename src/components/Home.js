import React, { Component } from 'react'
import MainContainer from './MainContainer';
import HelloSummer from './HelloSummer';
import TrendingProducts from './TrendingProducts';
import Shop from './Shop/Shop';


export default class Home extends Component {
    render() {
        return (
            <div>
                <MainContainer />
                <Shop />
                <HelloSummer />
                <TrendingProducts />
            </div>
        )
    }
}