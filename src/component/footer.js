import React from 'react'

export default function footer(props) {
    return (
        <div class="footer">    
		<p  >We are leaders in 10 countries:
            { props.c.map(el=> el.check ? 
            
            <a href={el.href}> <span>and {" "} </span>{el.titre}</a> :<a href={el.href}>{el.titre}</a>)
        }
		
		</p>
		<p >This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
        <p>www.docplanner.com © 2020</p>
	</div>
    )
}
