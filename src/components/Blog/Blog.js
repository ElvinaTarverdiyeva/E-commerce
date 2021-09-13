import React, { Component } from 'react'
import BlogData from '../Blog/BlogData';
import imgComments from '../../media/commentImg.png';
import { Link } from 'react-router-dom';


class BlogCards extends Component {
    render() {
        return (
            <div className="col-md-6 mb-3">
                <div className="card" style={{ maxWidth: '420px' }}>
                    <img src={this.props.imgBlog} className="card-img-top" alt="Blog Post" style={{ maxWidth: '420px' }} />
                    <div className="card-body">
                        <h2 className="card-title">{this.props.h2Blog}</h2>
                        <p className="text-muted">Admin {this.props.muteBlog}</p>
                        <audio controls>
                            <source src="http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3?1" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                        <p className="card-text">{this.props.textBlog}</p>
                        <Link to={`/Blog2/{id}`} className="btn-but">Read More</Link>
                    </div>
                </div>
            </div>
        )
    }
}

class BlogRecentPosts extends Component {
    render() {
        return (
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={this.props.imglBlog} className="img-fluid rounded-start" alt="Blog Recent Post" style={{ maxWidth: '70px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-0">
                            <h6 className="card-title">{this.props.h2Blog}</h6>
                            <p className="card-text"><small className="text-muted">{this.props.muteBlog}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class BlogPopularPosts extends Component {
    render() {
        return (
            <div className="card mb-3" style={{ maxWidth: '540px', border: 'none' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={this.props.imglBlog} className="img-fluid rounded-start" alt="Blog Popular Posts" style={{ maxWidth: '70px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-0">
                            <h6 className="card-title">{this.props.h2Blog}</h6>
                            <p className="card-text"><small className="text-muted">{this.props.muteBlog}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class RecentComments extends Component {
    render() {
        return (
            <div className="card mb-3" style={{ maxWidth: '540px', border: 'none' }}>
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={this.props.imgcBlog} className="img-fluid rounded-start" alt="Recent Comments" style={{ maxWidth: '50px' }} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body p-0">
                            <h6 className="card-title">Demo Says: </h6>
                            <p className="card-text"><small className="text-muted">Quisque semper nunc vitae...</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TitlesBlog extends Component {
    render() {
        return (
            <div className="titlesBlog">
                <ul>
                    <li>{this.props.textTitlesBlog}</li>
                </ul>
            </div>
        )
    }
}


export const BlogRightSec = () => {
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <hr />
            <h6 className="bligRightTitle">RECENT POSTS</h6>
            {BlogData.productData.map((item, index) => {
                return (
                    <BlogRecentPosts imglBlog={item.imgBlog}
                        h2Blog={item.h2Blog}
                        muteBlog={item.muteBlog}
                        item={item}
                        key={index}
                    />
                )
            })}

            <hr />

            <h6 className="bligRightTitle">POPULAR POSTS</h6>
            {BlogData.productData.map((item, index) => {
                return (
                    <BlogPopularPosts imglBlog={item.imgBlog}
                        h2Blog={item.h2Blog}
                        muteBlog={item.muteBlog}
                        item={item}
                        key={index}
                    />
                )
            })}

            <hr />

            <h6 className="bligRightTitle">RECENT COMMENTS</h6>
            <RecentComments imgcBlog={imgComments} />
            <RecentComments imgcBlog={imgComments} />
            <RecentComments imgcBlog={imgComments} />
            <RecentComments imgcBlog={imgComments} />

            <hr />

            <h6 className="bligRightTitle">ARCHIVES</h6>
            {BlogData.productData.map((item, index) => {
                if (index < 3) {
                    return (
                        <TitlesBlog textTitlesBlog={item.muteBlog}
                            item={item}
                            key={index}
                        />
                    )
                }
            })}

            <hr />

            <h6 className="bligRightTitle">CATEGORIES</h6>
            <TitlesBlog textTitlesBlog="Fashion" />
            <TitlesBlog textTitlesBlog="Travel" />
            <TitlesBlog textTitlesBlog="Videos" />
            <TitlesBlog textTitlesBlog="WordPress" />

            <hr />

            <h6 className="bligRightTitle">META</h6>
            <TitlesBlog textTitlesBlog="Log in" />
            <TitlesBlog textTitlesBlog="Entries RSS" />
            <TitlesBlog textTitlesBlog="Comments RSS" />
            <TitlesBlog textTitlesBlog="WordPress.org" />
        </div>
    )

}

const Blog = () => {
    return (
        <div className="container">
            <hr />
            <h1 className="blogTitle">Blog</h1>
            <hr />
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {BlogData.productData.map((item, index) => {
                            return (
                                <BlogCards imgBlog={item.imgBlog}
                                    h2Blog={item.h2Blog}
                                    muteBlog={item.muteBlog}
                                    textBlog={item.textBlog}
                                    item={item}
                                    key={index}
                                />
                            )
                        })}

                        <div className="nextPageDiv">
                            <button className="activeNextP">1</button>
                            <button>2</button>
                            <button>Next</button>
                        </div>

                    </div>
                </div>


                <div className="col-md-3 blogRight">
                    <BlogRightSec />
                </div>

            </div>

        </div>
    )
}

export default Blog