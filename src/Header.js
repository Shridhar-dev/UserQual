import React from 'react'
import backWaves from './Images/Picture1.png'
function Header() {
    return (
        <div style={{height:'100%',background:'#FF9480'}}>
            <div class="pt-5 mx-5 d-flex align-items-center flex-column" >
                <div class="mt-4">
                <h1 class="pt-5 pb-3" style={{color:'white'}}><strong>User testing done right. FINALLY.</strong></h1>
                </div>
                <div class="mx-5 mt-4 px-5">
                <p class="mx-5" style={{color:'white',fontSize:'1.1rem'}}>Interactive and feature-rich product testing platform with powerful video analytics, transcriptions, translations, and some mind bendingly awesome AI tools. Create in seconds, get feedback in minutes.</p>
                </div>
                <br />
                <p class="h6" style={{color:'white'}}>(Not included: fake results to please your boss)</p>
                <br />
                <div class="py-2" style={{background:'#71CFD7',width:'fit-content',borderRadius:'20rem'}}>
                    <h6 class="p-0 m-0 py-1 px-5">TRY IT FOR FREE</h6>
                </div>
            </div>
            <div class="hero___back">
                <img src={backWaves} style={{width: '100%'}} />
            </div>
        </div>
    )
}

export default Header
