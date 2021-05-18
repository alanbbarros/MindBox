import React from 'react';
import '../App.css'

const Cadastro = () =>{
    return(
        <div className='login' >
            <div className='center'>
                <h1>Cadastro</h1>
                <form method="post">
                    <div className='txt_field'>
                        <input type='text' required></input>
                        <span></span>
                        <label>Email</label>
                    </div>  

                    <div className='txt_field'>
                        <input type='text' required></input>
                        <span></span>
                        <label>Senha</label>
                    </div> 

                    <div className='txt_field'>
                        <input type='text' required></input>
                        <span></span>
                        <label>Confirme sua senha</label>
                    </div> 

                    <div className='pass' >Esqueci minha senha</div> 
                    <input type='submit' value='Cadastrar'/>
                    <div className='signup_link' ><a href='/'>Fazer Login</a></div>
                </form> 
            </div>
        </div>
    )
}
export default Cadastro;