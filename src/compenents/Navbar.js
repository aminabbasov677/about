import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Haqqında</Link>
      <Link to="/ish" style={{ margin: "0 10px" }}>İş Nümunələri</Link>
      <Link to="/elaqe" style={{ margin: "0 10px" }}>Əlaqə</Link>
    </nav>
  );
}
export default Navbar;