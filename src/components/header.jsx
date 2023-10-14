import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Job Finding</h2>
      <div>
        <Link to={"/"}>Job Lists</Link>
        <Link to={"/add-job"}>Add Job</Link>
      </div>
    </header>
  );
};

export default Header;
