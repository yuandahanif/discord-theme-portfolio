import DmLayout from "layouts/dmLayout";
import Layout from "layouts/layout";
import Server from "layouts/serverLayout";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Server />} />
          <Route path="/dm" element={<DmLayout />} />
          {/* <Route path="/server" element={<Server />} /> */}
          <Route path="/server/:server" element={<Server />} />
          <Route path="/server/:server/:channel" element={<Server />} />
          <Route
            path="*"
            element={
              <main className="flex justify-center items-center bg-dc-black-500 h-full text-white">
                <p>Oops! There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
