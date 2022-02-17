import Layout from "layouts/layout";
import Server from "layouts/serverLayout";
import { Route, Routes } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Server />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
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
