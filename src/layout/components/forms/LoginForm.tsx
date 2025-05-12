type props = {
  toggleLogin: () => void;
};

const LoginForm = ({ toggleLogin }: props) => {
  return (
    <div>
      <p>Login Form</p>
      <button onClick={toggleLogin}>Toggle</button>
    </div>
  );
};

export default LoginForm;
