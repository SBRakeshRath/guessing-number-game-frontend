import { User } from "firebase/auth";
import { createContext } from "react";

const initialState = {
  userData: null,
  updateUserData: () => {},
};

interface IContext {
  userData: null | User;
  updateUserData: React.Dispatch<
    React.SetStateAction<null |User>
  >;
}

const authContext = createContext<IContext>(initialState);

export default authContext;