import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './Post.css';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
 
class Post extends Component {
    confirmDeletion = () => {
        const {id} = this.props.info;
 
        Swal.fire({
                title: 'Delete this one?',
                text: "This action can not be canceled!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete',
                cancelButtonText: 'No, Cancel'
          }).then((result) => {
            if (result.value) {
                this.props.deletePost(id)
                Swal.fire(
                    'Press OK to back',
                    'The post has been deleted',
                    'success'
                )
            }
          })
    }
 
 
    render() {
        const {id, title, message, date,user} = this.props.info;
        console.log(this.props);
        console.log("Title",title);
        return ( 
            <Paper className="post">
            <p className="post_title" cols="10">
             
                <b><span className='post-preview'>
                    {title.length > 25 ? `${title.substr(0, 25)}...` : title}
                </span></b>
            </p>
            <Divider light />
                <p className="post_body">
                    
                    <span className='post-preview'>
                        {message.length > 300 ? `${message.substr(0, 300)}...` : message}
                    </span>
                </p>
                
                <Divider light />
               
                <p className="post_datestamp"><p>Author: {user}</p></p>          
                  
                    <div className="post_button">
                        
                    </div>                   
            </Paper>
         );
    }
}
export default Post;