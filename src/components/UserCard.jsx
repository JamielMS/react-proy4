import React from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen}) =>{

	const handleDelete = () => {
		deleteUserById(user.id)
	}

	const handleUpdate = () => {
		handleOpen()
		setUpdateInfo(user)
	}

	return (
		<article className = "card">
			<h2 className = "card__title">{ `${user.first_name } ${user.last_name }`}</h2>
			<div className = "card__body">
				<ul>
					<li>
						<ul>
							<li className ="card__sub-title">Email: </li>
							<li className ="card__content">{user.email}</li>
						</ul>
					</li>
					<li>
						<ul>
							<li className ="card__sub-title">Birthday: </li>
							<li className ="card__content">{user.birthday}</li>
						</ul>
					</li>
				</ul>
				<div className="card__button-container">
					<button className="btn card__btn-delete" onClick = {handleDelete}><i class="bi bi-trash"></i></button>
					<button className="btn card__btn-update" onClick = {handleUpdate}><i class="bi bi-pencil-square"></i></button>
				</div>
			</div>
		</article>
	
	)
};

export default UserCard;