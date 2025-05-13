type props = {
  toggleForm: () => void;
};

const RegisterForm = ({ toggleForm }: props) => {
  return (
    <div>
      <p>Register Form</p>
      <button className='secondary-btn' onClick={toggleForm}>
        Login
      </button>
    </div>
  );
};

export default RegisterForm;
