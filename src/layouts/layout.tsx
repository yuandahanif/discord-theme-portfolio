import ServerAvatar from "components/server/serverAvatar";
import { Outlet } from "react-router-dom";
import serverData from "../data/server.json";

const Layout = () => {
  return (
    <>
      <div className="w-full flex h-screen items-center justify-center bg-[#fff]">
        <main className="max-w-screen-2xl w-full h-full max-h-[778px] flex">
          <aside className="min-w-min h-full py-4 bg-dc-black-700 text-white flex flex-col items-center">
            <nav className="w-full flex h-full flex-col items-center">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <ServerAvatar name="Home" to="/dm" />
                  <div className="mt-2 w-6 mx-auto border-b-2 border-gray-700"></div>
                </li>
                {serverData.map((server) => (
                  <li key={server.id}>
                    <ServerAvatar
                      image={server.image_url}
                      name={server.name}
                      to={`/server/${server.id}`}
                    />
                  </li>
                ))}
                <li>
                  <ServerAvatar
                    image="https://ui-avatars.com/api/?name=404"
                    name="404"
                    to={`/404`}
                  />
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
