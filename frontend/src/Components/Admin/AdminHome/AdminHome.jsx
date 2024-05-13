import React from 'react'
import './AdminHome.css'
import {Link} from 'react-router-dom'

export default function AdminHome() {
  return (
    <div>
        <div class="div2" id='div2'>
            <section>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators" id=''>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner" id='sub'>
                        <div class="carousel-item active">
                        <img src="" class="d-block w-100" alt="First"/>
                        </div>
                        <div class="carousel-item">
                        <img src="" class="d-block w-100" alt="Second"/>
                        </div>
                        <div class="carousel-item">
                        <img src="" class="d-block w-100" alt="Third"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h1>Hai</h1>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h2>hello</h2>
                    </div>
                </div>
            </div>
            </section>
            <section>
            <div className="container" id='homedetails'>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-box"></i></h5>
                                <p class="card-text">Total number of apps</p>
                                <Link to={'../app_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-controller"></i></h5>
                                <p class="card-text">Total No of Gaming apps</p>
                                <Link to={'../game_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-app"></i></h5>
                                <p class="card-text">Total number of utility apps</p>
                                <Link to={'../utilityapp_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-people"></i></h5>
                                <p class="card-text">Total number of users</p>
                                <Link to={'../user_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-windows"></i></h5>
                                <p class="card-text">Total number of Windows apps</p>
                                <Link to={'../windowsapp_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-ubuntu"></i></h5>
                                <p class="card-text">Total number of Linux apps</p>
                                <Link to={'../linuxapp_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi bi-apple"></i></h5>
                                <p class="card-text">Total number of MAC apps</p>
                                <Link to={'../macapp_details'} id='link'><a href="#" class="btn btn-primary">View</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    </div>
  )
}
