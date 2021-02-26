import React from 'react'
import mac from './Images/smartmockups_kll3rbmj.mp4'
function VidPrew() {
    return (
        <div class="container-fluid" style={{background:'#004479'}}>
            <video width="1000" height="750" style={{outline:'none', marginTop:'-20%'}} class="img-fluid" controls>
                <source src={mac} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <h5 class="p-0 m-0 pb-5 pt-3" style={{color:'white'}}>We help create better products</h5>
        </div>
    )
}

export default VidPrew
