import { useState } from 'react';
import LoginForm from '../../components/forms/LoginForm';
import RegisterForm from '../../components/forms/RegisterForm';

const Welcome = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div>
      {isRegistering ? (
        <RegisterForm toggleForm={() => setIsRegistering(!isRegistering)} />
      ) : (
        <LoginForm toggleForm={() => setIsRegistering(!isRegistering)} />
      )}
    </div>
  );
};

export default Welcome;
