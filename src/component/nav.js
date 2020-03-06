import React from 'react'
import './nav.css'

function menu(props) {
    console.log(props)
    return (
        <div className="head">
      
            <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="prop"/>
            
            <ul className="nav-menu">
            {
props.x.map((el,i)=>el.drop?
    <li   key={i} className="dropdown"><a href={el.href} style={{color:el.isactif===true ?'##00b39b':'#ababab' }}>{el.title}</a>
    <ul className="dropdown-content">
     {
         el.drop.map(el=> 
            <li className="dropi">{el}</li>)
     }  
      </ul> 
     </li>: <li key={i} ><a id="a2" href={el.href}style={{color:el.isactif===true ?'#00b39b':'#ababab' }}>{el.title}</a></li>)
     }



   </ul>
        </div>
    )
}

    


export default menu