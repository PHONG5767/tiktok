import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publishRoute } from "./route";
import DefaultLayout from "./Components/Layout/Default";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publishRoute.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if(route.Layout === null) {
              Layout = Fragment
            } else if (route.Layout) {
              Layout = route.Layout
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
