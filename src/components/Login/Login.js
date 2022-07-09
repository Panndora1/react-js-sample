import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div className='login-main'>
                <h1>Авторизация</h1>
                <div className="form">
                    <input type="email" placeholder='Ваш e-mail' className='input'></input>
                    <input type="password" placeholder='Ваш пароль' className='input'></input>
                </div>
                <p>Еще нет аккаунта? <a href='../Singup/Singup.js'>Зарегистрируйтесь</a></p>
            </div>
        )
    }
}

export default Login;