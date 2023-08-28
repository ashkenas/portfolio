import { useCallback, useContext } from "react";
import { Link, useHref, useLinkClickHandler, useLocation } from "react-router-dom";
import { NavContext } from "../NavContext";

export default function AnimatedLink({ to, replace, state, target, ...passThrough }) {
  const [tId, setTId] = useContext(NavContext);
  const href = useHref(to);
  const { pathname } = useLocation();
  const doNavigation = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  const clickHandler = useCallback((e) => {
    e.preventDefault();
    if (pathname === href) return;
    clearTimeout(tId);
    document.querySelector('main')?.classList.add('hide');
    setTId(setTimeout(() => doNavigation(e), 250));
  }, [doNavigation, tId, setTId, pathname]);

  return (
    <Link {...passThrough} to={href}
      onClick={(e) => clickHandler(e)} />
  );
};
