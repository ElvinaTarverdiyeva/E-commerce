import React, { Component } from 'react'
import cardphoto1 from '../media/carditem9.jpg';
import cardphoto2 from '../media/carditem5.jpg';
import cardphoto3 from '../media/carditem10.jpg';
import cardphoto4 from '../media/carditem11.jpg';

import cardphoto5 from '../media/carditem8.jpg';
import cardphoto6 from '../media/carditem12.jpg';
import cardphoto7 from '../media/carditem13.jpg';
import cardphoto8 from '../media/carditem7.jpg';

class Boxhover extends Component {
    render() {
        return (
            <div>
                <div className="boxes">
                    <i class="fas fa-archive"></i><hr></hr>
                    <i class="fas fa-sliders-h"></i><hr></hr>
                    <i class="far fa-heart"></i>
                </div>
                <div className="viewdiv">
                    <a className="quickview" href="">+ Quick View</a>
                </div>
            </div>
        )
    }
}

class Mycolumns extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <img src={this.props.img} className="d-block w-80" id="firstcardphoto" alt="" />
                <img src={this.props.img2} className="d-block w-80" id="secondcardphoto" alt="" />
                <Boxhover />
            </div>
        )
    }
}

class TrendingProducts extends Component {
    render() {
        return (
            <div className="container trending">
                <h1>Trending Products</h1>
                <p>Consequat magna massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                <div className="row mt-5">
                    <Mycolumns img={cardphoto1} img2={cardphoto5} />
                    <Mycolumns img={cardphoto2} img2={cardphoto6} />
                    <Mycolumns img={cardphoto3} img2={cardphoto7} />
                    <Mycolumns img={cardphoto4} img2={cardphoto8} />
                </div>
            </div>
        )
    }
}


export default TrendingProducts
