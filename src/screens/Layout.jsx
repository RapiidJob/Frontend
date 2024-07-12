// Layout.js
import React from 'react';
import MenuBar from '../components/MenuBar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <MenuBar/>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}

export default Layout;
