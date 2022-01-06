import { useState, useRef } from 'react';

const LoginForm = () => {
  const enteredUserName = useRef();
  const enteredPassword = useRef();


  const submitHandler = (event) => {
    event.preventDefault();
    const userName=enteredUserName.current.value;
    const password=enteredPassword.current.value;
    console.log(userName, password);


    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    // myHeaders.append("", "");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCIsImV4cCI6MTY0MTQ3MDYxMH0.BduErGz_MSc96ka6LCq7K2zE7HWWDU0VNCgaoH5qU_k");
    
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCIsImV4cCI6MTY0MTQ3MDYxMH0.BduErGz_MSc96ka6LCq7K2zE7HWWDU0VNCgaoH5qU_k";  
    console.log(atob(token.split('.')[1]));
    
    var formdata = new FormData();
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://asia-south1-cc-dev-sandbox-20200619.cloudfunctions.net/get_quote_summary", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  //   var formdata = new FormData();
  //   formdata.append("username", userName);
  //   formdata.append("password", password);

  //   var myHeaders = new Headers();
  //   myHeaders.append("Accept", "application/json");
  //   myHeaders.append("Authorization", "Basic dGVzdDpwYXNzd29yZA==");
  
  //   fetch('https://asia-south1-cc-dev-sandbox-20200619.cloudfunctions.net/get_login_token',{
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow',
  // }).then((res) => {
  //     console.log(res);
  //   })
  }

  return (
    <form onSubmit={submitHandler}>
      <h2> Login </h2>
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" ref={enteredUserName}></input>
    <label htmlFor="password">password:</label>
    <input type="password" id="password" ref={enteredPassword}></input>
    <button>Submit</button>
    </form>
  );
};

export default LoginForm;