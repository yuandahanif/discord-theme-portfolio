import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full flex min-h-screen">
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
