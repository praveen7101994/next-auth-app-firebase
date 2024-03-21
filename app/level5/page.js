import ProtectedRoute from "../components/protectedRoute";

const ProtectedPage = () => {
  return (
    <ProtectedRoute level={4}>
      <div>
        congratulations, You have access to <b>level-4</b> page
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
