import React, {useState, useContext} from 'react'
import AuthContext from '../../../shared/AuthContext';
import LoginInput from '../../UI/button/LoginInput';
import '../../pages/authentication/styles/login.css'
import Header from '../../layouts/Header';

export default function Register() {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [byEmail, setByEmail] = useState(true)
  const {register}= useContext(AuthContext)
 
  const registerSubmit = async (event) => {
    event.preventDefault();
    let payload = {};
    if (byEmail) {
       payload = {

        email: email,
        password: password,
        password2: password2
      }
    }
    else {
       payload = {
        phone_number: phoneNumber,
        password: password,
        password2: password2
      }
    }

    let data = await register(payload);
    if (data) {
      console.log(data);
    }
    
  }


  if (byEmail){
    return (
      <div className='wrap'>
        <Header></Header>
          <div className="login-page">
          <div className="form">
  
        <div class='container' >
          <button onClick={() => setByEmail(true)}>
            By Email
          </button>
          <button onClick={() => setByEmail(false)}>
            By Phone
          </button>
        </div>
          
          
        <form className="register-form">
        <p className='name'>Register</p>
        <LoginInput type="email" placeholder="Email" value={email}
                  required
                  onChange={event => setEmail(event.target.value)}/>
        <LoginInput type="password" placeholder="password" value={password}
                  required
                  onChange={event => setPassword(event.target.value)}/>
        <LoginInput type="password" placeholder="repeat password" value={password2}
                  required
                  onChange={event => setPassword2(event.target.value)}/>
  
        <button onClick={registerSubmit}>create</button>
        <p className="message">Already registered? <a href="/login" >Sign In</a></p>
        </form> 
      </div>
      </div>
      </div>
      
    )
  } else {
    return (
      <div className='wrap'>
        <Header></Header>
          <div className="login-page">
          <div className="form">
  
          <div className='container'>
          <button onClick={() => setByEmail(true)}>
            By Email
          </button>
          <button onClick={() => setByEmail(false)}>
            By Phone
          </button>
        </div>
          
        <form className="register-form">
        <p className='name'>Register</p>

        <LoginInput type="text" placeholder="Phone" value={phoneNumber}
                  required
                  onChange={event => setPhoneNumber(event.target.value)}/>

        <LoginInput type="password" placeholder="password" value={password}
                  required
                  onChange={event => setPassword(event.target.value)}/>
        <LoginInput type="password" placeholder="repeat password" value={password2}
                  required
                  onChange={event => setPassword2(event.target.value)}/>
  
        <button onClick={registerSubmit}>create</button>
        <p className="message">Already registered? <a href="/login" >Sign In</a></p>
        </form> 
      </div>
      </div>
      </div>
      
    )
  }

  
}
