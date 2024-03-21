import ProtectedRoute from "../components/protectedRoute";

const ProtectedPage = () => {
  return (
    <ProtectedRoute level={3}>
      <div>
        congratulations, You have access to <b>level-3</b> page
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
