import React from 'react'
import "./Feed_Component_Css/home.css"
const Home = () => {
  return (
    
    <div className='home_container'>


    {/*Institute Stats*/}
    <h3 class=" mt-5 mb-3 px-5 text-dark ">Institute Statistics</h3>
    <div class="dashboard-container container-institute container-fluid ">
        <div class="main-card   p-5  d-flex flex-column justify-content-center align-items-center">
            <h1 class="text-primary">350</h1>
            <p class=" placed text-success">Students placed</p>
            <p class=" desctext-dark ">Till Date 2023 Batch</p>
        </div>

        
        <div class="main-card  p-5  d-flex flex-column align-items-center">
            <h5 class="text-dark text-sm">Placement Stats</h5>
            <img src="..." class="w-75 h-75" alt="..."/>
            <button class="btn btn-primary text-light">View all</button>
            
        </div>
       
       
        <div class="main-card  p-5  d-flex flex-column  justify-content-center align-items-center">
            <h5 class="text-dark text-sm">Highest Package</h5>
            <div class="w-100 h-75 text-center d-flex align-items-center justify-content-center">
                <h1 class="text-success">22.5 Lacks</h1>
            </div>
            <button class="btn btn-primary text-light">View all</button>
        </div>
       
    </div>



    {/* Student Stats*/}

    <h3 class=" mt-5 mb-3 px-5 text-dark">Student Statistics</h3>
    <div class="dashboard-container align-items-center container-institute container-fuild  ">

        <div class="main-card   p-5  d-flex flex-column justify-content-center align-items-center ">
            <h5 class="text-dark text-sm text-center mb-5">Personal Info</h5>
            <div class="det-row d-flex">
                <b class="text-bold ">Name:</b>
                <p class="px-3">Saurabh Talele</p>

            </div>

            <div class="det-row d-flex">
                <b class="text-bold ">Skills:</b>
                <p class="px-3">Python,c++, HTML, CSS</p>

            </div>

            <div class="container d-flex justify-content-center p-3">
                <button class="btn btn-primary text-light">View all</button>
            </div>

        </div>

        
        <div class="main-card  p-5  d-flex flex-column justify-content-center align">
            <h5 class="text-dark text-sm">Companies Registered</h5>
            <div class="w-100 h-75 text-center d-flex align-items-center justify-content-center">
                <h1 class="text-warning">5</h1>
            </div>
            <button class="btn btn-primary text-light">View all</button>
        </div>
       
       
        <div class="main-card  p-5  d-flex flex-column  justify-content-center align-items-center">
            <h5 class="text-dark text-sm">Offer Letters</h5>
            <div class="w-100 h-75 text-center d-flex align-items-center justify-content-center">
                <h1 class="text-danger">0</h1>
            </div>
            <button class="btn btn-primary text-light ">View all</button>
        </div>
       
    </div>
    </div>
  )
}

export default Home
