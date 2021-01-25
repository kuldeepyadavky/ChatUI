import React from 'react'
import { Avatar } from '@material-ui/core'
import './MessageComponent.css'
import MicNoneIcon from '@material-ui/icons/MicNone'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'
import PhotoOutlinedIcon from 'material-ui/icons/PhotoOutlined'

function MessageComponent({
	avatar,
	number,
	content,
	timestamp,
	activity,
	files,
	voice,
	fileCount,
	photo,
	active,
	username,
}) {
	return (
		<div
			className={active ? 'message__component__invert' : 'message__component'}
		>
			<div className='header'>
				<div className='user'>
					<Avatar src={avatar} />

					<div className='user__data'>
						<b>{username}</b>

						<div className='activity'>
							{voice && <MicNoneIcon />}
							<small>{activity}</small>
						</div>
					</div>
				</div>

				<div className='timestamp'>
					<small>{timestamp}</small>
				</div>

				{voice && (
					<div className='voice'>
						<MicNoneIcon />
						<small>voice message (01:15)</small>
					</div>
				)}

				<div className='message__body'>
					{content && (
						<div className='content'>
							<p>{content}</p>
						</div>
					)}

					{files && (
						<div className='message__files'>
							<div className='files'>
								<InsertDriveFileOutlinedIcon />
								<p>Files ({fileCount})</p>
							</div>

							{photo && (
								<div className='photo'>
									<PhotoOutlinedIcon />
									<p>Photo</p>
								</div>
							)}
						</div>
					)}
					{number && (
						<div className='number'>
							<p>{number}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default MessageComponent
