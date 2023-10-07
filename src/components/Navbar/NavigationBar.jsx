import { Link, useNavigate } from "react-router-dom";
const NavigationBar = function () {
  const navigate = useNavigate();

  function onLogOut() {
    localStorage.clear();
    navigate("/");
    console.log("logout");
  }

  function onLogIn() {
    localStorage.clear();
    navigate("/");
    console.log("login");
  }

  const isSignedIn = localStorage.getItem("accessToken")?.length >= 1;

  return (
    <nav className="navbar navbar-expand-lg bg-danger ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light">Movie Dheko</Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light">Pricing</Link>
            </li>
            {isSignedIn ? (
              <li className="nav-item ">
                <p className="nav-link text-light" onClick={onLogOut}>
                  Log out
                </p>
              </li>
            ) : (
              <li className="nav-item">
                <p className="nav-link text-light" onClick={onLogIn}>
                  Log In
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
