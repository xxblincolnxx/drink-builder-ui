import { useState } from 'react';
import LoginForm from '../../components/forms/LoginForm';
import RegisterForm from '../../components/forms/RegisterForm';

const Welcome = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div>
      {isRegistering ? (
        <RegisterForm toggleLogin={() => setIsRegistering(!isRegistering)} />
      ) : (
        <LoginForm toggleLogin={() => setIsRegistering(!isRegistering)} />
      )}
    </div>
  );
};

export default Welcome;
