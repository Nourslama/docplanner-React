import React from 'react'
import './nav.css'
export default function sponsers(props) {
    return (
        
        <div class="border1">

	<div class="bor1">
    
		<div >
			<p >We are a global company
with local culture</p>
		</div>
        <div class="marg">
		{props.z.map((el,i)=>
             
    
            <svg  xmlns={el.xmlns} width={el.width} height={el.height}  viewBox={el.viewBox} >
                <path d={el.path} ></path>
            </svg>
    
                
)}
</div>
	</div>
</div>

)
}
