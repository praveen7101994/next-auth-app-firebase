import ProtectedRoute from "../components/protectedRoute";

const protectedPage = () => {
  return (
    <ProtectedRoute level={3}>
      <div>
        congratulations, You have access to <b>level-3</b> page
      </div>
      <br />
      <SignOutButton />
    </ProtectedRoute>
  );
};

export default protectedPage;
