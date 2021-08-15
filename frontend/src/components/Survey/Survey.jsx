import React, { Component } from 'react';
import './Survey.scss';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
export default function Survey(){

  return(<div>
<main id="main" class="container">
  <div class="shadow p-6 mb-2 bg-beige rounded">
  <h1 id="title" class="title">
      Questionnaire
    </h1>
    <section class="content">
      <p id="description" class="description">
        To know you better
      </p>
      <form id="survey-form" class="form">
        
        <div class="field">
          <label id="drodown=label" for="dropdown">
            Have you met any close friends this week?
          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>
        <div class="field">
          <label id="drodown=label" for="dropdown">
            Are you working on things that matter to you personally?
          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div> 
        <div class="field">
          <label id="drodown=label" for="dropdown">
            Have you helped someone today with something you were good at?
          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>
        <div class="field">
          <label id="drodown=label" for="dropdown">
            Did you sleep more than 7-8 hours everyday this week?
          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>
        <div class="field">
          <label id="drodown=label" for="dropdown">
            Have you experienced name-calling, rejections or public embarrasment? 
          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>
        <div class="field">
          <label id="drodown=label" for="dropdown">
           Have you experienced some sort of mental disturbace due to abusive behaviour, be it family, professional or social circle?

          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>
<div class="field">
          <label id="drodown=label" for="dropdown">
           Have you experienced or witnessed any violence?

          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>

<div class="field">
          <label id="drodown=label" for="dropdown">
           Please do tell us if you have a victim of physical or domestic violence 

          </label>
          <select name="dropdown" id="dropdown">
            <option value="1">Yes</option>
            <option value="0">No</option>
            
          </select>
        </div>

        <button id="submit" type="submit" class="btn"><p onClick={Swal.fire(
                        'Sucess',
                        'We recommend you to join our community Safe Headspace',
                        
                    )
 }>Submit</p></button>
      </form>
    </section>
    
  </div>
    
  </main>
  

  </div>
    
  )
}