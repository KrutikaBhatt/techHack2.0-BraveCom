import React from 'react';
import './styles/eventTables.css';

export default function EventTable(){
    return (
        <>
            <div id="content" className="p-4 p-md-5 pt-5" >
            <br  />
            <br />
            <br />
            <div className="main-content">
                <div className="container mt-7">
                

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

                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media align-items-center">

                                                            <div className="media-body">
                                                                <span className="mb-0 text-sm">Argon Design System</span>
                                                                <br />
                                                                <small> Kashish </small>
                                                            </div>
                                                        </div>    

                                                    </th>
                                                    <td>
                                                        100
                                                    </td>
                                                </tr>
                                            

                                            
                                                <tr>
                                                    <th scope="row">
                                                        <div className="media align-items-center">

                                                            <div className="media-body">
                                                                <span className="mb-0 text-sm">Argon Design System</span>
                                                                <br />
                                                                <small> Kashish </small>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        2200
                                                    </td>
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