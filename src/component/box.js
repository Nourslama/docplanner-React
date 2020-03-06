import React from 'react'
import './nav.css'
export default function box(props) {
    return (
        <div className="border">
    
	<div className="elem2">
		<div className="divs">
			<h4> For patients</h4>
			<h2>Find a doctor, book a visit and <br/>solve any health-related doubt</h2>
			
			<select >
                {
            props.y.map((el,i)=><option> {el}</option>)}
                
            </select>
                

			
				<img className="siz"src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
		
			
		</div>
		<div className="divs1">
			<h4> For doctors</h4>
			<h2>Save time managing visits and <br/> cut no-shows by half</h2>
		
			
				<img className="siz1" src="https://www.docplanner.com/img/screen-saas@2x.png"/>
			
		
		</div>
	</div>
</div>

    )
                }
