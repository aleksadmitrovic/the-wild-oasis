import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated, isFetching } = useUser();
  const navigate = useNavigate();

  // 2. If there is NO authenticted user,redirect to the /login
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated && !isFetching) navigate("/login");
    },
    [isLoading, isAuthenticated, isFetching, navigate]
  );

  // 3. WHile loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
