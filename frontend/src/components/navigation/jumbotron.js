import React from 'react';
import './styles/navbar.css';
import './styles/icofont.css';
import './styles/bootstrap.css';
import './styles/fontAwesome.css';

export default function Jumbotron(){
    return (
        <>
        
      <section id="hero" class="d-flex flex-column justify-content-end align-items-center" >
        <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel" >
          <div class="row">
            <div class="col-md-7">
       
          <div class="carousel-item active">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Selecao</span></h2>
              <p class="animate__animated fanimate__adeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
              <p class="animate__animated animate__fadeInUp"> est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
              <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
            </div>
            <div class="col-md-2 hero-img">
              <img src="world_hero.png" alt="" />
            </div>
          </div>
          </div>

        <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgb(196, 144, 228, .1)" />
          </g>
          <g class="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgb(81, 45, 109, .7)" />
          </g>
          <g class="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#F9F9F9" />
          </g>
        </svg>

      </section>

        </>
    )
}

