import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full flex h-screen bg-[#fff]">
        <main className="max-w-screen-2xl h-screen w-full flex mx-auto">
          <aside className="w-24 bg-dc-black-700 text-white flex flex-col items-center">
            <nav>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/nothing-here">404</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <div className="grow">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
