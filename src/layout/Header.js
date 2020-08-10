import React , { Component } from 'react'

export class Header extends Component{

    render(){
        return (
          <nav className="navbar navbar-expand-sm navbar-light bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="/">
    <img class="colorLogo" src ="./components/logocolored-01.png"/>
    </a>

    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    </ul>
  </div>
  <div class="BookF">Profile</div>
  <img class="profLogo" src="./components/profile icon-01.png"/>
</nav>
        )

    }

}

export default Header
