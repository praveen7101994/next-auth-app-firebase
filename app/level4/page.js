import ProtectedRoute from "../components/protectedRoute";

const ProtectedPage = () => {
  return (
    <ProtectedRoute level={5}>
      <div>
        congratulations, You have access to <b>level-5</b> page
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
