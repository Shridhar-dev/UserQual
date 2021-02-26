import React from 'react'
import curImg from './Images/Picture17.png'
import foot from './Images/Picture18.png'
function Curious() {
    return (
        <div class="container-fluid pt-5 mt-5 px-0" style={{overflow:'hidden'}}>
            <div class="row d-flex align-items-start">
                <div class="col-xl-7 col-md-12">
                    <img src={curImg} width="600" class="img-fluid"/>
                </div>
                <div class="col-xl-5 col-md-12">
                    <h1 class="mt-5">Curious?</h1>
                    <p class="py-2">
                    Sign up for a FREE trial – 1 free test!<br/>
Or book a demo – we’d love to show you around!

                    </p>
                    <div class="mt-5">
                    <button type="button" class="btn  px-5 py-3 mx-2" style={{border:'1px solid #71CFD7'}}>TRY IT FOR FREE</button>
                    <button type="button" class="btn  px-5 py-3 mx-2" style={{background:'#FF9480',color:'white'}}>Book a demo</button>
                    </div>
                </div>
            </div>
            <div class="footback" style={{position:'relative'}}>
                <img src={foot} class="img-fluid" style={{width:'100vw',position:'relative',zIndex:'-10',top:'0%',left:'0%'}} />
            <div style={{position:'absolute',zIndex:'1000',top:'75%'}}>
                <div class="d-flex justify-content-between" style={{width:'98vw',color:'white'}}>
                    <div class="d-flex ">
                        <p class="mx-4">Home</p>
                        <p class="mx-5">About userqual</p>
                        <p class="mx-5">FAQ</p>
                        <p class="mx-5">Privacy and Terms and Conditions</p>
                        <p class="mx-4">Blog</p>
                    </div>
                    <p class="mr-5">Happy Testing!</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Curious
