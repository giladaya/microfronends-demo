import React from "react";
import { navigateToUrl } from "single-spa";

const NavBar = () => {
  const [count, setCount] = React.useState(0);

  const handleCountChange = React.useCallback(
    ev => {
      setCount(ev.detail);
    },
    [setCount]
  );

  React.useEffect(() => {
    window.addEventListener("reactApp:count:changed", handleCountChange);
    return () =>
      window.removeEventListener("reactApp:count:changed", handleCountChange);
  }, [handleCountChange]);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" onClick={navigateToUrl} className="brand-logo">
          single-spa demo ({count})
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/" onClick={navigateToUrl}>
              Home
            </a>
          </li>
          <li>
            <a href="/vanilla" onClick={navigateToUrl}>
              Vanilla
            </a>
          </li>
          <li>
            <a href="/react" onClick={navigateToUrl}>
              React
            </a>
          </li>
          {/* Note that we still need to build our AngularJS App before this link will work */}
          <li>
            <a href="/angularJS" onClick={navigateToUrl}>
              AngularJS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
