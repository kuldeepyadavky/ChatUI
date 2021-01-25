import React from 'react'
import './Search.css'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'

function Search() {
	return (
		<div className='search'>
			<div className='search__left'>
				<SearchOutlinedIcon />
				<input type='text' placeholder='Search' />
			</div>
			<div className='search__right'>
				<small>Messages</small>
				<KeyboardArrowDownRoundedIcon />
			</div>
		</div>
	)
}

export default Search
