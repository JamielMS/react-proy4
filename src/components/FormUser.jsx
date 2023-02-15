import React, {useEffect} from 'react'
//import  from 'react'
import { useForm } from 'react-hook-form';
import defaultValues from '../utils/defaultValues'


const FormUser = ({ createNewUser, updateInfo, updateUserById, handleClose, setUpdateInfo}) =>{

	const { reset, register, handleSubmit} = useForm()

	useEffect ( ( ) =>{
		if(updateInfo){
			reset(updateInfo)
		}
	}, [updateInfo])
	

	const submit = data => {

		if(updateInfo){
			updateUserById(updateInfo.id, data);
		}
		else{
			createNewUser(data);
		}
		handleClose();
		reset(defaultValues);

	}

	const handleCancel = () =>{
		reset(defaultValues)
		setUpdateInfo();
		handleClose();
	}

	return(
		<form className ="form"onSubmit={handleSubmit(submit)} >
			<h2 className = "form__title">{updateInfo ? "Update User":"Create User"}</h2>
			<hr/>	
			<div className ="form__item">
				<label className = "form__label" htmlFor="">Email:</label>
				<input className = "form__input" {...register('email')} type="text" id = "email"/>			
			</div>
			
			<div className ="form__item">
				<label className = "form__label" htmlFor="password">Password:</label>
				<input className = "form__input" {...register('password')} type="password" id = "password"/>
			</div>

			<div className ="form__item">
				<label className = "form__label" htmlFor="firstName">First name:</label>
				<input className = "form__input" {...register('first_name')} type="text" id = "firstName"/>
			</div>

			<div className ="form__item">
				<label className = "form__label" htmlFor="lastName">Last Name:</label>
				<input className = "form__input" {...register('last_name')} type="text" id = "lastName"/>
			</div>

			<div className ="form__item">
				<label className = "form__label" htmlFor="birthday">Birthday:</label>
				<input className = "form__input" {...register('birthday')} type="date" id = "birthday"/>
			</div>

			<div className ="form__btnContainer">
				<button className ="form__btn-submit btn" type ="submit">{updateInfo ? "Update":"Create"}</button>
				<button className ="form__btn-cancel btn" type = "button" onClick = {handleCancel}  >Cancel</button>
			</div>
			
		
		</form>
	);
};

export default FormUser;