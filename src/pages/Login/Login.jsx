

const Login = () => {

  const onClick = () => {
    localStorage.setItem("isLoggedIn", "true");
    
  };
  return (
    <div>
      <h1>Click to login</h1>
      <button onClick={onClick}>Login</button>
    </div>
  );
};

export default Login;