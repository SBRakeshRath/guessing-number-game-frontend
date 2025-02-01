import { useState } from "react";
import authContext from "./authContext";
import { User } from "firebase/auth";

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, updateUserData] = useState<null | User>(null);

  return (
    <authContext.Provider
      value={{
        userData,
        updateUserData,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
