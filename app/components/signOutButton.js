import React from "react";
import { Auth } from "../firebase";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      console.log("Sign out successful");
      sessionStorage.removeItem("user");
      //   router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return <button onClick={handleSignOut}>Sign out</button>;
};

export default SignOutButton;
