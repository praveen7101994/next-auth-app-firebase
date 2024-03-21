import ProtectedRoute from "../components/protectedRoute";

const ProtectedPage = () => {
  return (
    <ProtectedRoute level={2}>
      <div>
        congratulations, You have access to <b>level-2</b> page
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
