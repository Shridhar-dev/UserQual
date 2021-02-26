import React from 'react'
import mock from './Images/Picture6.png'
import mock2 from './Images/Picture7.png'
import mock3 from './Images/Picture10.png'

function FAB() {
    return (
        <div class="container">
            <h4 class="py-5">Features & Benefits</h4>
            <div class="d-flex flex-column">

                <div class="align-self-start mb-5">
                    <div class="row d-flex align-items-center p-3" style={{borderRadius:'1rem',border:'1px solid rgba(0,0,0,0.2)',width:'fit-content'}}>
                        <div class="col-8">
                            <h5 class="text-left">+ Remote Mobile & Desktop Testing</h5>
                            <ul class="text-left">
                                <li>In-depth target audience selection and screeners</li>
                                <li>Ideal for user engagement pre/post product launch</li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <img src={mock} class="img-fluid" width="500"/>
                        </div>
                    </div>
                </div>

                <div class="align-self-end mb-5">
                    <div class="row d-flex align-items-center p-3" style={{borderRadius:'1rem',border:'1px solid rgba(0,0,0,0.2)',width:'fit-content'}}>
                        <div class="col-4">
                            <img src={mock2} class="img-fluid" width="200"/>
                        </div>
                        <div class="col-8">
                            <h5 class="text-left">+ Quick turnaround and increased conversion velocity</h5>
                            <ul class="text-left">
                                <li>15-min unmoderated video sessions to 60-minute moderated group sessions </li>
                                <li>Set panels for quicker feedback</li>
                                <li>Ideal for website/app UI/UX testing and offline CPG product testing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="align-self-start mb-5">
                    <div class="row d-flex align-items-center p-3" style={{borderRadius:'1rem',border:'1px solid rgba(0,0,0,0.2)',width:'fit-content'}}>
                        <div class="col-8">
                            <h5 class="text-left">+ In-depth analysis and richer insight</h5>
                            <ul class="text-left">
                                <li>Real reactions and honest feedback from users</li>
                                <li>Sentiment analysis, wordcloud, net promotor scores, statistics</li>
                                <li>Ideal for media/storyboard feedback, price/packaging/taste A/B tests</li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <img src={mock3} class="img-fluid" width="400"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAB
