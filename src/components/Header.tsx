import React from 'react'
import Background from '../images/Background.jpeg'

function Header() {

  
    const myStyle={
        backgroundImage: `url(${Background})` ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh',
        width:'100%',
        marginTop:'-70px',
        fontSize:'50px',
        zIndex:'1',
    };
  return (
    <div>
         <section id="hero">
        <div className="hero container" style={myStyle}>
            <div>
                <h1>Hi,<span></span></h1>
                <h1>I'm <span></span></h1>
                <h1>Ifeanyi <span></span></h1>
                <a href="#" type="button" className="cta">Portfolio</a>
            </div>
        </div>

    </section>
    </div>
  )
}

export default Header