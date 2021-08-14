import React, { Component } from 'react';
import blogimg from "../../images/blogimg.jpg"
 import './Post.css';
 
class Form extends Component {
    //create refs
    authorRef = React.createRef();
    titleRef = React.createRef();
    contentRef = React.createRef();
    
 
 
    createPost = (e) => {
        e.preventDefault();
 
        const post = {
            author: this.authorRef.current.value,
            title: this.titleRef.current.value,
            body: this.contentRef.current.value,
            
        }
 
        this.props.createPost(post);
 
    }
 
 
    render() { 
        return ( 
            
            <form onSubmit={this.createPost} className="col-md-9">
           
            <img src={blogimg} alt='logo' className="photo" />
                
                <div>
                    <legend className="text-center">Create New Post</legend>
 
                <div className="form-group">
                    <label>What do you feel like writing about today?</label>
                    <input type="text" ref={this.titleRef} className="form-control" placeholder="Title.." />
                </div>
 
                <div className="form-group">
                    <label>Author: You can always keep your name anonymous if you wish to! :)</label>
                    <input type="text" ref={this.authorRef} className="form-control" placeholder="Tag your name.." />
                </div>
 
                <div className="form-group">
                    <label>Content:</label>
                    <textarea className="form-control" rows="7"cols="20" ref={this.contentRef} placeholder="Here write your content.."></textarea>
                </div>
 
                
                <button type="submit" className="btn btn-primary">Create</button>
                 
                 </div>

            
                
            </form>
         );
    }
}
 
export default Form;