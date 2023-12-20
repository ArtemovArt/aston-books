import { useDispatch, useSelector } from "react-redux";
import { Login, Registration } from "../authService/authService";
import { auth } from "../firebase";
import { removeUser, setIsLoading, setUser } from "../store/reducers/userSlice";
import { userSelector } from "../store/selectors";

export function useAuth() {
  const user = useSelector(userSelector.user);
  const dispatch = useDispatch();

  const authUser = () =>
    auth.onAuthStateChanged(async (person) => {
      if (person) {
        dispatch(setUser(person));
      }
      dispatch(setIsLoading(false));
    });

  const loginUser = async (email, password) => {
    const userData = await Login(email, password);
    return userData;
  };

  const registrUser = async (email, password) => {
    const userData = await Registration(email, password);
    return userData;
  };

  const logOutUser = () => {
    auth.signOut();
    dispatch(removeUser());
  };

  return {
    isAuth: !!user,
    // eslint-disable-next-line object-shorthand
    user: user,
    auth: authUser,
    login: loginUser,
    register: registrUser,
    logout: logOutUser,
  };
}
