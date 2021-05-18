import React from 'react';
import '../App.css'

const Login = () =>{
    return(
        <div className='login' >
            <div className='center'>
                <h1>Login</h1>
                <form method="post">
                    <div className='txt_field'>
                        <input type='text' required></input>
                        <span></span>
                        <label>Usuário</label>
                    </div>  

                    <div className='txt_field'>
                        <input type='text' required></input>
                        <span></span>
                        <label>Senha</label>
                    </div> 

                    <div className='pass' >Esqueci minha senha</div> 
                    <input type='submit' value='Login'/>
                    <div className='signup_link' ><a href='/cadastro'>Cadastro</a></div>
                </form> 
            </div>
        </div>
    )
}
export default Login;