import React, {useState, useContext} from 'react'
import Header from '../../layouts/Header'
import LoginInput from '../../UI/button/LoginInput'
import '../../pages/authentication/styles/login.css'
import axios from 'axios'
import AuthService  from '../../../services/auth.service'
import { AuthContext } from '../../../shared/AuthContext'

export const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
}

export default function Login() {
  
  const [isRegister, setIsRegister] = useState(false)
  function h1() {
    setIsRegister(!isRegister);
    console.log(isRegister);
  }


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // function submit(event) {
  //   event.preventDefault();
  //   let data = AuthService.login(username, password).then((res) => {
  //       console.log(res);
  //   }, error => console.log('123'))
    
    // .then(
      // () => {
      //   this.props.router.navigate("/profile");
      //   window.location.reload();
      // },
      // error => {
      //   // const resMessage =
      //   //   (error.response &&
      //   //     error.response.data &&
      //   //     error.response.data.message) ||
      //   //   error.message ||
      //   //   error.toString();

       
      
      //   const message = error;
      //   console.log(message);
       
      // }
    // );
 
  //   else {
  //   this.setState({
  //     loading: false
  //   });
  // }
    // const user = {
    //       login: username,
    //       password: password
    //      };
    // // Create the POST requuest
    // axios.post('http://localhost:8000/api/login/',
    //                user, {
    //                 headers: {'Content-Type': 'application/json'}
    //               },
    //                {withCredentials: true}).then((response) => {
    //                 const data = response.data;
    //                 localStorage.clear();
    //                 localStorage.setItem('access_token', data.access);
    //                 localStorage.setItem('refresh_token', data.refresh);
    //                 // axios.defaults.headers.common['Authorization'] = 
    //                 //                `Bearer ${data['access']}`;
    //                 setAuthToken(data.access);
    //                 // window.location.href = '/'
    //                 console.log(data);
    //                }
                    

                    
  // //   console.log(data);
  // //  // Initialize the access & refresh token in localstorage.      
  // //  localStorage.clear();
  // //  localStorage.setItem('access_token', data.access);
  // //  localStorage.setItem('refresh_token', data.refresh);
  // //  axios.defaults.headers.common['Authorization'] = 
  // //                                  `Bearer ${data['access']}`;
  // //  window.location.href = '/'

  const {login}= useContext(AuthContext)
 
  const loginSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      login: username,
      password: password
    }
    await login(payload);
  }


  return (
    
    <div className='wrap'>
        <Header></Header>
        <div className="login-page">
        <div className="form">
        
        {/* {isRegister ?  */}
          
        <div>
          <form class="login-form">
          <p className='name'>Sign in</p>
          <input type="text" placeholder="Phone or email" value={username} required onChange={event => setUsername(event.target.value)}/>
          <input type="password" placeholder="password" value={password}
                required
                onChange={event => setPassword(event.target.value)}/>
          <button type='submit' onClick={loginSubmit}>login</button>
          <p className="message">Not registered? <a href="" onClick={h1}>Create an account </a></p>
          </form>
        </div>
           
          {/* //   : ''
          // } */}
        
            
        </div>
        </div>
    </div>
    
  )
}
