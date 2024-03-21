"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children, level }) => {
  const router = useRouter();
  console.log("level", level);

  // Check if user is authenticated, you can replace this with your authentication logic
  const sessionData = sessionStorage.getItem("user");
  const user = JSON.parse(sessionData);
  console.log("user.level", user.level);
  const isAuthenticated = user.level == level ? true : false; // Example, replace this with your actual logic
  console.log("isAuthenticated", isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect user to login page if not authenticated
      router.push("/");
    }
  }, [isAuthenticated, router]);

  // Render children only if user is authenticated
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
