type props = {
  toggleLogin: () => void;
};

const RegisterForm = ({ toggleLogin }: props) => {
  return (
    <div>
      <p>Register Form</p>
      <button onClick={toggleLogin}>Toggle</button>
    </div>
  );
};

export default RegisterForm;
