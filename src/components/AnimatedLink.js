import { useCallback, useContext } from "react";
import { Link, useHref, useLinkClickHandler } from "react-router-dom";
import { NavContext } from "../NavContext";

export default function AnimatedLink({ to, replace, state, target, ...passThrough }) {
  const [tId, setTId] = useContext(NavContext);
  const href = useHref(to);
  const doNavigation = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  const clickHandler = useCallback((e) => {
    e.preventDefault();
    clearTimeout(tId);
    document.querySelector('main')?.classList.add('hide');
    setTId(setTimeout(() => doNavigation(e), 250));
  }, [doNavigation, tId, setTId]);

  return (
    <Link {...passThrough} to={href}
      onClick={(e) => clickHandler(e)} />
  );
};
