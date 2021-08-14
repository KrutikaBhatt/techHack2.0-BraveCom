import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';
 
const Navigation = () => {
    return (
        <div>
            <main class="main">
  <aside class="sidebar">
    <nav class="nav">
      <ul>
      <li><Link to={'/'}>List All Posts</Link></li>
            	<li><Link to={'/create'}>Add New Post</Link></li>
      </ul>
    </nav>
  </aside>

  
</main>
        

        </div>

     );
}
 
export default Navigation;