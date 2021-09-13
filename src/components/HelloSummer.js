import React, { Component } from 'react'
import summerphoto from '../media/hellosummer.jpg'

class HelloSummer extends Component {
    render() {
        return (
            <div className="container">
                <img src={summerphoto} alt="" className="w-100 d-block mt-5 mb-5" />
            </div>
        )
    }
}

export default HelloSummer
