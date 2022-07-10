import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: ''
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

    handleSubmit = event => {
        event.preventDefault();
    
        axios.post(`https://internsapi.public.osora.ru/api/auth/login`, { 
            email: this.state.email,
            password: this.state.password
         })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render() {
        const { email, password } = this.state

        return (
            <div className='login-main'>
                <h1>Авторизация</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="email" placeholder='Ваш e-mail' className='input' value={email} onChange={this.handleEmailChange}></input>
                    <input type="password" placeholder='Ваш пароль' className='input' value={password} onChange={this.handlePassswordChange}></input>
                    <button type='submit'>Отправить</button>
                </form>
                <p>Еще нет аккаунта? <Link to="/singup">Зарегистрируйтесь</Link></p>
            </div>
        )
    }
}

export default Login;