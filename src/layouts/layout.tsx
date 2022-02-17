import ServerAvatar from "components/server/serverAvatar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full flex h-screen bg-[#fff]">
        <main className="max-w-screen-2xl h-screen w-full flex mx-auto">
          <aside className="min-w-min h-full py-4 bg-dc-black-700 text-white flex flex-col items-center">
            <nav className="w-full flex flex-col items-center">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <ServerAvatar name="Home" to="/dm" />
                  <div className="mt-2 w-6 mx-auto border-b-2 border-gray-700"></div>
                </li>
                <li>
                  <ServerAvatar name="Portfolio" to="/server/portfolio" />
                </li>
                <li>
                  <ServerAvatar name="404" to="/404" />
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
