import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dep from "../../images/dep.jpg"
import dep1 from "../../images/dep1.jpg"
import dep2 from "../../images/dep2.jpg"
import dep3 from "../../images/dep3.jpg"
import './Group.css'
import $ from 'jquery'; 
export default function Groups(){
    
    return(
        
        <div>
           <div class="section">
    <div class="container">
        <h2>Join A community together</h2>
        <div class="image-carousel style2 flexslider" data-animation="slide" data-item-width="270" data-item-margin="30">
            <div class="flex-viewport" style={{overflow: "hidden", position: "relative"}}>
                <ul class="slides image-box hotel listing-style1" style={{width: "1000%" ,transitionduration: "0.6s", transform: "translate3d(-300px, 0px, 0px)"}}>
                    <li style={{width: "270px", float: "left", display: "block"}}>
                        <article class="box">
                            <figure> <a href="#" class="hover-effect popup-gallery"><img width="270" height="160" alt="" src={dep} draggable="false"/></a> </figure>
                            <div class="details"> <span class="price"><small>avg/night</small>$188</span>
                                <h4 class="box-title"><small>Albufeira</small></h4>
                                <div class="feedback">
                                    <div data-placement="bottom" data-toggle="tooltip" class="fa fa-star" title="" data-original-title="4 stars"><span style={{width: "80%"}} class="five-stars"></span></div> <span class="review">170 reviews</span>
                                </div>
                                <p class="description">For what reason would it be advisable for me to think about business content?</p>
                                <div class="action"> <a class="button btn-small" href="#">BOOK</a> <a class="button btn-small yellow popup-map" href="#" data-box="37.089072, -8.247880">VIEW ON MAP</a> </div>
                            </div>
                        </article>
                    </li>
                    <li style={{width: "270px", float: "left", display: "block"}}>
                        <article class="box">
                            <figure> <a href="#" class="hover-effect popup-gallery"><img width="270" height="160" alt="" src={dep1} draggable="false"/></a> </figure>
                            <div class="details"> <span class="price"><small></small></span>
                                <h4 class="box-title">Safe Headspace<small>Mumbai</small></h4>
                                <div class="feedback">
                                    <div data-placement="bottom" data-toggle="tooltip" class="fa fa-user-circle" title="" data-original-title="4 stars"><span style={{width: "80%;"}} class="five-stars"></span></div> <span class="review">485 members</span>
                                </div>
                                <p class="description">Have you ever wtinessed or experienced violence? You are not alone. Join this community to seek help.</p>
                                <div class="action"> <a class="button btn-small" href="/join">JOIN</a> <a class="button btn-small yellow popup-map" href="/join" data-box="40.463667, -3.749220">CREATE MEET</a> </div>
                            </div>
                        </article>
                    </li>
                    <li style={{width: "270px", float: "left", display: "block"}}>
                        <article class="box">
                            <figure> <a href="#" class="hover-effect popup-gallery"><img width="270" height="160" alt="" src={dep2} draggable="false"/></a> </figure>
                            <div class="details"> <span class="price"><small></small></span>
                                <h4 class="box-title">Lessened Burdens<small>Mumbai</small></h4>
                                <div class="feedback">
                                    <div data-placement="bottom" data-toggle="tooltip" class="fa fa-user-circle" title="" data-original-title="4 stars"><span style={{width: "80%"}} class=""></span></div> <span class="review">367 members</span>
                                </div>
                                <p class="description">Are you being harassed by an unknown or perhaps even a known person? Join this community and speak up.</p>
                                <div class="action"> <a class="button btn-small" href="/join">JOIN</a> <a class="button btn-small yellow popup-map"href="/join" data-box="40.705631, -73.978003">CREATE MEET</a> </div>
                            </div>
                        </article>
                    </li>
                    <li style={{width: "270px", float: "left", display: "block"}}>
                        <article class="box">
                            <figure> <a href="#" class="hover-effect popup-gallery"><img width="270" height="160" alt="" src={dep3} draggable="false"/></a> </figure>
                            <div class="details"> <span class="price"> <small></small> </span>
                                <h4 class="box-title">Positivity Brigade<small>Pune</small></h4>
                                <div class="feedback">
                                    <div data-placement="bottom" data-toggle="tooltip" class="fa fa-user-circle" title="" data-original-title="4 stars"><span style={{width: "80%"}} class="five-stars"></span></div> <span class="review">270 members</span>
                                </div>
                                <p class="description">Struggling to cope up with anxiety after experiencing or witnessing acts or terrorism? Join us.</p>
                                <div class="action"> <a class="button btn-small" href="/join">JOIN</a> <a class="button btn-small yellow popup-map" href="/join" data-box="48.856614, 2.352222">CREATE MEET</a> </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}