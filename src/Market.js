import React from 'react'
import m1 from './Images/Picture11.png'
import m2 from './Images/Picture12.png'
import m3 from './Images/Picture13.png'
import m4 from './Images/Picture14.png'
import m5 from './Images/Picture15.png'
import m6 from './Images/Picture16.png'
import Collapsible from 'react-collapsible';


function Market() {
   
    return (
        <div class="container-fluid">
            <h4 class="py-5">See how UserQual is disrupting Market Research</h4>
            <div class="d-flex justify-content-center flex-wrap">
                <img src={m1} class="img-fluid mx-1" width="180"/>
                <img src={m2} class="img-fluid mx-1" width="180"/>
                <img src={m3} class="img-fluid mx-1" width="180"/>
                <img src={m4} class="img-fluid mx-1" width="180"/>
                <img src={m5} class="img-fluid mx-1" width="180"/>
                <img src={m6} class="img-fluid mx-1" width="180"/>
                <div>
                </div>

    
            </div>
            <div class="container text-left px-5">
                <Collapsible trigger="➡ BRAND LOYALTY" class="">
                    <p class="ml-4">
                        Brand loyalty is the biggest determining factor of a company’s long-term success. Brands need a reliable way to measure and understand changes in brand affinity over time. We offer
                        <ul>
                            <li>Rewards offering</li>
                            <li>Product reviews</li>
                            <li>Loyalty customer connections</li>
                            <li>Social promotions</li>
                            <li>Customer support</li>
                            <li>Insider access to brand information</li>

                        </ul>
                    </p>
                </Collapsible>

                <Collapsible trigger="➡ CONCEPT TESTING" class="">
                    <p class="ml-4">
                        This is the collapsible content. It can be any element or React
                        component you like.
                    </p>
                </Collapsible>

                <Collapsible trigger="➡ IN-HOME USAGE TESTING" class="">
                    <p class="ml-4">
                        This is the collapsible content. It can be any element or React
                        component you like.
                    </p>
                </Collapsible>

                <Collapsible trigger="➡ PRICE TESTING" class="">
                    <p class="ml-4">
                        This is the collapsible content. It can be any element or React
                        component you like.
                    </p>
                </Collapsible>

                <Collapsible trigger="➡ BRAND HEALTH TRACKING" class="">
                    <p class="ml-4">
                        This is the collapsible content. It can be any element or React
                        component you like.
                    </p>
                </Collapsible>
                </div>
        </div>
    )
}

export default Market
