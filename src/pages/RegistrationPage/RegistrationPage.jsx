import { useDispatch } from "react-redux";
import { RegistrationForm } from "../../components/RegisterForm/RegistrationForm";
import { registerOperation } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const register = (userData) => {
    dispatch(registerOperation(userData));
  };
  return (
    <div>
      <p>Registration</p>
      <RegistrationForm submit={register} />
    </div>
  );
};
export default RegistrationPage;
