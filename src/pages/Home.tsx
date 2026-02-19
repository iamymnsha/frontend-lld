import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Component Library</h1>
      <Link to="/todos">Todos</Link>
    </>
  );
}
