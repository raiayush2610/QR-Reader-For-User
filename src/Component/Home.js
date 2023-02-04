import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><NavLink to = "/black" className="a-nav nav-link active">Black</NavLink></li>
        <li class="nav-item"><NavLink to = "/red" className="a-nav nav-link active">Red</NavLink></li>
        <li class="nav-item"><NavLink to = "/green" className="a-nav nav-link active">Green</NavLink></li>
        <li class="nav-item"><NavLink to ="/blue"  className="a-nav nav-link active" >Blue</NavLink></li>
        <li class="nav-item"><NavLink to ="/violet"  className="a-nav nav-link active" >Violet</NavLink></li>
        <li class="nav-item"><NavLink to ="/yellow"  className="a-nav nav-link active" >Yellow</NavLink></li>
        <li class="nav-item"><NavLink to ="/pink"  className="a-nav nav-link active" >Pink</NavLink></li>
        <li class="nav-item"><NavLink to ="/test"  className="a-nav nav-link active" >Qr</NavLink></li>
                
      </ul>
    </div>
  )
}

export default Home
