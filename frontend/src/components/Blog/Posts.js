import React, { Component } from 'react';
import Listing from './Listing';
import './Post.css';
 
class Posts extends Component {
    state = {  }
    render() { 
        return ( 
            <form className="form-group">
                <legend className="text-center">What's new!</legend>
                <Listing 
                    posts={this.props.posts} 
                    deletePost={this.props.deletePost} 
                />
            </form>
         );
    }
}
 
export default Posts;