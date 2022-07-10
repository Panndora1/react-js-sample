import React, { Component } from 'react';
import './Signup.css'
import axios from 'axios';

class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    handleNameChange = ({target: { value }}) => {
        this.setState({
            name: value,
        })
    }

    handleEmailChange = ({target: { value }}) => {
        this.setState({
            email: value,
        })
    }

    handlePassswordChange = ({target: { value }}) => {
        this.setState({
            password: value,
        })
    }

    handleConfirmationChange = ({target: { value }}) => {
        this.setState({
            password_confirmation: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
           
    
        axios.post(`https://internsapi.public.osora.ru/api/auth/signup`, { 
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
         })
          .then(res => {
            console.log(res);
            console.log(res.data.access_token);
          })
      }


    render() {
        const { name, email, password, password_confirmation } = this.state

        return (
            <div className='signup'>
                <h1>Регистрация</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Ваше имя' className='input' value={name} onChange={this.handleNameChange}></input>
                    <input type="email" placeholder='Ваш e-mail' className='input' value={email} onChange={this.handleEmailChange}></input>
                    <input type="password" placeholder='Придумайте пароль' className='input' value={password} onChange={this.handlePassswordChange}></input>
                    <input type="password" placeholder='Повторите пароль пароль' className='input' value={password_confirmation} onChange={this.handleConfirmationChange}></input>
                    <button type='submit'>Отправить</button>
                </form>
            </div>
        )
    }
}

export default Signup;