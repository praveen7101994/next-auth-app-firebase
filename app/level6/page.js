import ProtectedRoute from "../components/protectedRoute";

const ProtectedPage = () => {
  return (
    <ProtectedRoute level={6}>
      <div>
        congratulations, You have access to <b>level-6</b> page
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
