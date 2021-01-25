import React from 'react'
import './Nav.css'
function Nav({ icon, active, link }) {
	return (
		<div className={active === true ? 'nav active' : 'nav'}>
			<span className='icon'>{icon} </span>
			<p>{link}</p>
		</div>
	)
}

export default Nav
