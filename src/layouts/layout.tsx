import { Link, Outlet } from "react-router-dom";
import avatar from "../assets/images/taco.png";

const Layout = () => {
  return (
    <>
      <div className="w-full flex h-screen bg-[#fff]">
        <main className="max-w-screen-2xl h-screen w-full flex mx-auto">
          <aside className="min-w-min h-full px-2 py-4 bg-dc-black-700 text-white flex flex-col items-center">
            <nav className="w-full flex flex-col items-center">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <Link to="/dm">
                    <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                      <img
                        src={avatar}
                        alt="profile"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/server">
                    <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                      <img
                        src={avatar}
                        alt="profile"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/nothing-here">404</Link>
                </li>
              </ul>
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
