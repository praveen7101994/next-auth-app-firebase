import ProtectedRoute from "../components/protectedRoute";

const ProtectedPage = () => {
  return (
    <ProtectedRoute level={1}>
      <div>
        congratulations, You have access to <b>level-1</b> page
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
