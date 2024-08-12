import { useAuthContext } from "../../contexts/ContextHooks";

function HomePage() {
  const { user } = useAuthContext();

  // if (loading) return <div>Loading....</div>;

  return <div>HomePage {user && user?.displayName} </div>;
}

export default HomePage;
