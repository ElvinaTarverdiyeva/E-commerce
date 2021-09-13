import React, { Component } from 'react'
import BlogData from './BlogData';
import Blog from './Blog';
import commentImg from '../../media/commentImg.png';
import imgComments from '../../media/commentImg.png';

const CommenterBlog2 = () => {
    return (
        <div className="row py-2">
            <div className="col-md-2 d-flex justify-content-center align-items-center">
                <img src={commentImg} alt="Commenter" />
            </div>
            <div className="col-md-8">
                <h6>Admin</h6>
                <p className="text-muted">October 6, 2014 at 1:38 am</p>
                <p className="text-muted">just a nice post</p>
            </div>
            <div className="col-md-2 d-flex justify-content-center align-items-center">
                <button>Reply</button>
            </div>
        </div>
    )
}

const InfoBlog2 = (props) => {
    return (
        <div className="infoBlog">
            <h1>{props.imgText}</h1>
            <img src={props.imgBlog} alt="ImgBlog" height="575px" />
            <p>{props.p1Blog}</p>
            <p>{props.p2Blog}</p>
            <div className="oranleftdiv">
                Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.
            </div>
            <p>
                {props.p3Blog}
                <br /> <br />
                {props.p4Blog}
            </p>
        </div>
    )
}


const BLog2 = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <hr />
                    <div className="col-md-9 blog2">
                        {BlogData.productData.map((item, index) => {
                            if (item.id === 2)
                                return (
                                    <InfoBlog2 imgText={item.h2Blog}
                                        imgBlog={item.imgBlog}
                                        p1Blog={item.p1Blog}
                                        p2Blog={item.p2Blog}
                                        p3Blog={item.p3Blog}
                                        p4Blog={item.p4Blog}
                                        item={item}
                                        key={index} />
                                )
                        }
                        )}


                        <div className="blog2icons">
                            <div className="icontext">
                                <p><i class="fas fa-user"></i>Admin</p>
                                <p><i class="far fa-clock"></i>March 10, 2015</p>
                                <p><i class="fas fa-file"></i>Fashion, WordPress</p>
                                <p><i class="fas fa-tag"></i>Fashion, T-Shirt, White</p>
                            </div>
                            <div className="iconsocial">
                                <div><i class="fab fa-facebook-f"></i></div>
                                <div><i class="fab fa-twitter"></i></div>
                                <div><i class="fab fa-pinterest-p"></i></div>
                                <div><i class="fab fa-google"></i></div>
                                <div><i class="fab fa-linkedin-in"></i></div>
                            </div>
                        </div>

                        <div className="blog2Comments py-5">
                            <hr />
                            <h3>3 Comments</h3>
                            <hr />

                            <div className="blog2Commenter">
                                <CommenterBlog2 />
                                <CommenterBlog2 />
                            </div>
                        </div>

                        <div className="blog2Reply py-5">
                            <hr />
                            <h3>Leave A Reply</h3>
                            <hr />
                            <p className="text-muted">Your email address will not be published. Required fields are marked *</p>

                            <form action="#">
                                <label htmlFor="comment">Comment</label> <br />
                                <textarea name="comment" id="" ></textarea>
                                <br />

                                <div className="labelblog2">
                                    <label htmlFor="comment">Name *</label>
                                    <label htmlFor="comment">Email *</label>
                                    <label htmlFor="comment">Website</label>
                                </div>
                                <div className="inputsblog2">
                                    <input type="text" name="" id="" />
                                    <input type="email" name="" id="" />
                                    <input type="text" name="" id="" />
                                    <button>Post Comment</button>
                                </div>


                            </form>

                        </div>
                    </div>



                    <div className="col-md-3 blogRight">
                        {/* <BlogRightSec /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BLog2
