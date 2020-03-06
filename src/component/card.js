import React from 'react'
import './nav.css'
export default function card(props) {
    return (
        <div className="bord3">
<div className="bord4">
<div className="b"> 
			<h2>The world's <br/>
biggest healthcare platform</h2>
<p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>

		</div>
        <div class="groupe">
		
			 	{
                     props.a.map((el,i)=>(
                        
                        <div className="b1" style={i===2? {marginTop: "40px"}:{marginTop: "60px"} }>     
                    <img src={el.src} srcset={el.srcset}/>
                     <h2>{el.titre}</h2>
                     <p> {el.paragraphe}</p>
                     </div>

                   ))	
                   }
			
		</div>

</div></div>)}