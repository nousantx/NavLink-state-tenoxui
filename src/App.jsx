import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { createClasses, mergeClasses } from "./utils";
import Code from "./code";

const App = () => {
  const location = useLocation();
  useLayoutEffect(
    () => {
      use({
        property,
        classes: mergeClasses(
          {
            display: {
              flex: "flex"
            },
            justifyContent: {
              space: "space-between"
            }
          },
          createClasses({
            center: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            navlink: {
              display: "block",
              padding: "4px 12px",
              color: "#b2b8be",
              textDecorationLine: "none"
            },
            "navlink--active": {
              display: "block",
              padding: "4px 12px",
              borderRadius: "4px",
              background: "rgb(255 255 255 / 0.1)",
              color: "#f3f4f5",
              textDecorationLine: "underline",
              textDecorationColor: "red"
            }
          })
        )
      });
      makeStyles({
        body: "bg-#1a1e20 tc-#f3f4f5 family-[poppins,sans-serif]",
        p: "fw-500 lh-1.3em ls--0.025em"
      });
      tenoxui();
    },
    /**
     * re-updating the styles.
     *
     * Case: If you reload the page from `about` page, and goes back to the -
     * `home` page, the element wont styled.
     * So, make sure to re-apply the styles when the pathname is changed
     */
    // [] // emtpy dependencies, will not re-styling the page when you chnaging route
    [location.pathname] // adding location dependency to ensure to reapply tenoxui function
  );

  return (
    <>
      <nav className="flex space ai-center p-1rem">
        <h1 className="fs-1rem fw-500">TenoxUI</h1>

        <div className="center">
          {/* using tenoxui.classes for managing the active state */}
          <NavLink to="/" className={({ isActive }) => (isActive ? "navlink--active" : "navlink")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? " navlink--active" : "navlink")}>
            About
          </NavLink>
        </div>
      </nav>
      <main className="p-1rem">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="">
                  <h1 className="">Its Homepage</h1>
                  <p className="mt-1rem">Hey, let's create a className for the NavLink and create active state style!</p>
                  <p className="mt-8px">Hey, let's create a className for the NavLink and create active state style!</p>
                  <Code className="mt-1rem" lang="javascript" codeOnly>{`new makeTenoxUI({
  element: ...,
  classes: createClasses({
    navlink: {
      display: "block",
      padding: "4px 12px",
      color: "#b2b8be",
      textDecorationLine: "none"
    },
    "navlink--active": {
      display: "block",
      padding: "4px 12px",
      borderRadius: "4px",
      background: "rgb(255 255 255 / 0.1)",
      color: "#f3f4f5",
      textDecorationLine: "underline",
      textDecorationColor: "red"
    }
  })
});`}</Code>
                </header>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <header className="">
                  <h1 className="">Its About</h1>
                  <p className="mt-8px">Hey, let's create a className for the NavLink and create active state style!</p>
                </header>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
