import React from 'react'
import Nav from './Nav/Nav'
import './SideBar.css'
import './Nav/Nav.css'

/*Importing Icons*/
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import HomeIcon from '@material-ui/icons/Home'
import SmsRoundedIcon from '@material-ui/icons/SmsRounded'
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded'
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import PowerSettingsNewRounded from '@material-ui/icons/PowerSettingsNewRounded'

import { Avatar } from '@material-ui/core'

function SideBar() {
	return (
		<div className='sidebar'>
			{/*User Info*/}
			<div className='user'>
				<Avatar className='avatar' src='img/henry.jpg' />
				<div className='name'>
					<b>Henry Jabbawockiez</b>
					<KeyboardArrowDownIcon />
				</div>
			</div>

			{/*Navigation Section */}
			<div className='nav__links'>
				<Nav link='HOME' icon={<HomeIcon />} />

				<Nav link='CHAT' icon={<SmsRoundedIcon />} active={true} />

				<Nav link='CONTACT' icon={<PermIdentityRoundedIcon />} />

				<Nav link='NOTIFICATIONS' icon={<NotificationsNoneRoundedIcon />} />

				<Nav link='CALENDAR' icon={<DateRangeRoundedIcon />} />

				<Nav link='SETTINGS' icon={<SettingsRoundedIcon />} />
				<div className='logout'>
					<Nav link='LOGOUT' icon={<PowerSettingsNewRounded />} />
				</div>
			</div>
		</div>
	)
}

export default SideBar
