import React, { Component } from 'react'
import AboutUs from './AboutUs'
import Buttons from './Buttons'
import Information from './Information'
import Myaccount from './Myaccount'
import Ourservice from './Ourservice';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <Buttons />
                        <Myaccount />
                        <Information />
                        <Ourservice />
                        <AboutUs adress="123 Main Street, Anytown, CA 12345 - USA." phone="(012) 800 456 789" fax="(012) 800 456 789" email="Contact@plazathemes.com" />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
