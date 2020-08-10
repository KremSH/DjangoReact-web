import React , { Component } from 'react'

export class Footer extends Component{

render(){
return(

<footer class="Foot">
<div class="Footdiv">
<img class="WhiteLogo" src ="./components/logo white-01.png"/>
<a href="#"><h3 class="FootH">Profile</h3></a><br/>
<a href="#"><h3 class="FootH">Sign In</h3></a><br/>
<a href="#"><h3 class="FootH">Music</h3></a>
</div>
<br/>
<br/>
<br/>
<br/>
<div>
<p class="FootP"><a href="#">Legal</a>
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<a href="#">Privacy Center</a>
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<a href="#">Privacy Policy</a>
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<a href="#">Cookies</a>
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
<a href="#">About Ads</a>
<span class="CopyW">
        © 2019 MusicDB
    </span>
</p>

</div>
</footer>

)


}


}

export default Footer