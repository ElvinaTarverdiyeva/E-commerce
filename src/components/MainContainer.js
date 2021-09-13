import React, { Component } from 'react';
import Photo1 from '../media/contentphoto1.jpg';
import Photo2 from '../media/contentphoto2.jpg';
import Photo3 from '../media/contentphoto3.jpg';
import Photo4 from '../media/contentphoto4.jpg';


class MainContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8" >
                        <img src={Photo1} className="firstphoto" alt="firstphotonotfound" />
                        <div className="contenttext">
                            <p id="firsttext">New Arrivals</p>
                            <h1>Zip Hoodie</h1>
                            <p id="secondtext">Posuere sociis eu libero vivamus convallis eros pede.
                                torquent vestibulum aenean.</p>
                            <a className="discover" href="#">Discover Now</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 secondcol">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                                <div className="photodiv2">
                                    <img src={Photo2} className="secondphoto" alt="secondphotonotfound" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                                    <div className="photodiv3">
                                        <img src={Photo3} className="thirdphoto" alt="thirdphotonotfound" />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                                    <div className="photodiv4">
                                        <img src={Photo4} className="fourthphoto" alt="fourthphotonotfound" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainer
