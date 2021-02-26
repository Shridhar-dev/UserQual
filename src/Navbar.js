import React,{useState} from 'react'

function Navbar() {
  const [state, setstate] = useState('collapse navbar-collapse hide')
    return (
        <nav class="navbar navbar-expand-lg navbar-light " style={{background:'#FF9480'}}>
        <div class="container-fluid mx-5 py-1">
          <a class="navbar-brand ml-4" href="#" style={{color:'white'}}>UserQual</a>
          <button onClick={()=>{if(state === "collapse navbar-collapse hide"){setstate('collapse navbar-collapse show')}else{setstate('collapse navbar-collapse hide')}}} class="navbar-toggler" type="button"  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={state} id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-link active mx-1" style={{color:'white',padding:'0.2rem 0rem 0.2rem 0rem'}} aria-current="page" href="#">PRICING</a>
              <button class="btn btn-sm px-4 py-0 mx-3" style={{color:'white',background:'#004479'}} type="button">SIGN IN</button>
              <button class="btn btn-sm btn-light py-0 mx-1 px-5 mr-4" type="button">BECOME A TESTER</button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
