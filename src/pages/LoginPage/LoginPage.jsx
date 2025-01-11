import { useDispatch } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logInOperation } from "../../redux/auth/operations";

export default function LoginPage() {
  const dispatch = useDispatch();
  const login = (userData) => {
    dispatch(logInOperation(userData));
  };

  return (
    <div>
      <p>Log in to the app</p>
      <LoginForm submit={login} />
    </div>
  );
}
