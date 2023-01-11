import React from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
  console.log("login result",response);
}
const componentClicked=(data)=>{
  console.warn(data)
}

  export default class App extends React.Component  {
render(){
    return (
    <div>
        <h1>Login With Facebook</h1>
        <FacebookLogin
    appId="1273873210197522"
    autoLoad={true}
    fields={"name,email,picture,last_name,first_name,gender,friends,birthday,likes,posts"}
    onClick={componentClicked}
    callback={responseFacebook} />
      </div>
  );
}
  }

  
