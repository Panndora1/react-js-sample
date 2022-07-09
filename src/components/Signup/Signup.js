import React, { Component } from 'react';
import './Signup.css'

class Signup extends Component {
    render() {
        return (
            <div className='signup'>
                <h1>Регистрация</h1>
                <div className="form">
                    <input type="text" placeholder='Ваше имя' className='input'></input>
                    <input type="email" placeholder='Ваш e-mail' className='input'></input>
                    <input type="password" placeholder='Придумайте пароль' className='input'></input>
                    <input type="password" placeholder='Повторите пароль пароль' className='input'></input>
                </div>
            </div>
        )
    }
}

export default Signup;