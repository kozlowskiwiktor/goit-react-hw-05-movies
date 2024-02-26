import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <NavLink className={css.menu_item} to="">
              Home
            </NavLink>
            <NavLink className={css.menu_item} to="/movies">
              Movies
            </NavLink>
          </nav>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
