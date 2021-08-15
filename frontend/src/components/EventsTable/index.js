import React,{useEffect,useState} from 'react';
import './styles/eventTables.css';

import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import axios from 'axios';
export default function EventTable(){

  
  const [Events, setEvents] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4001/event/ranking/611789167aa7562a607b27a8`)
      .then((data) => {
          console.log(data);
        if(data){
            setEvents("Events :",data.data);
        }
      })
  }, []);
  console.log(Events);
    return (
        <>
            <div id="content" className="p-4 p-md-5" >
            <div className="main-content">
                <div className="container ">
                

                    <div className="row">

                        <div className="col">
                            <div className="card shadow">
                                <div className="card-header border-0">
                                    <h3 className="mb-0">EVENTS</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Event Name</th>
                                                <th scope="col">Number of people registered</th>
                                         
                                                <th scope="col">Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr>
                                            <th scope="row">
                                                <div className="media align-items-center">

                                                    <div className="media-body">
                                                        <span className="mb-0 text-sm">Fundraiser for Old Age Home repair</span>
                                                        <br />
                                                        <small> Krutika Bhatt </small>
                                                    </div>
                                                </div>    

                                            </th>
                                            <td>
                                                22
                                            </td>
                                            
                                            <td>Kalyan station, A-1023, Maharashtra</td>
                                        </tr>
                                        
 
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media align-items-center">

                                                            <div className="media-body">
                                                                <span className="mb-0 text-sm">Garbage cleanup for sideby Road</span>
                                                                <br />
                                                                <small> Suresh agrawal </small>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        51
                                                    </td>
                                                
                                                    <td>Gauri Road, Khadakpad , Kalyan(w)</td>
                                                </tr>
                                                   
                                            <tr>
                                            <th scope="row">
                                                <div className="media align-items-center">

                                                    <div className="media-body">
                                                        <span className="mb-0 text-sm">Educate the nearby Slum areas</span>
                                                        <br />
                                                        <small>Riya Gori</small>
                                                    </div>
                                                </div>    

                                            </th>
                                            <td>
                                                13
                                            </td>
                                            
                                            <td>Dharavi Area,Bandra, Mumbai,Maharashtra</td>
                                        </tr>
                                        
                                           
                                        <tr>
                                            <th scope="row">
                                                <div className="media align-items-center">

                                                    <div className="media-body">
                                                        <span className="mb-0 text-sm">Help with groceries and medicine</span>
                                                        <br />
                                                        <small>Avni Shah </small>
                                                    </div>
                                                </div>    

                                            </th>
                                            <td>
                                                3
                                            </td>
                                            
                                            <td>1003-A, Gandhi street, Mumbai</td>
                                        </tr>
                                        
                                            
                                            </tbody>
                                            </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </>
    )
}