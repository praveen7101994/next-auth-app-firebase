import ProtectedRoute from "../components/protectedRoute";

const protectedPage = () => {
  return (
    <ProtectedRoute level={2}>
      <div>
        congratulations, You have access to <b>level-2</b> page
      </div>
      <br />
      <SignOutButton />
    </ProtectedRoute>
  );
};

export default protectedPage;
