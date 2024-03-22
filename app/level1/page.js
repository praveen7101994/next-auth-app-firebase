"use client";

import SignOutButton from "../components/SignOutButton";
import ProtectedRoute from "../components/protectedRoute";

const protectedPage = () => {
  return (
    <ProtectedRoute level={1}>
      <div>
        congratulations, You have access to <b>level-1</b> page
        <br />
        <SignOutButton />
      </div>
    </ProtectedRoute>
  );
};

export default protectedPage;
