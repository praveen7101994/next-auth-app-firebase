import ProtectedRoute from "../components/protectedRoute";

const protectedPage = () => {
  return (
    <ProtectedRoute level={5}>
      <div>
        congratulations, You have access to <b>level-5</b> page
      </div>
      <br />
      <SignOutButton />
    </ProtectedRoute>
  );
};

export default protectedPage;
