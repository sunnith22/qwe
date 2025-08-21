import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import Cards1 from './pages/Cards1';
import Cards2 from './pages/Cards2';
import Charts from './pages/Charts';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

// This function determines the title shown in the header based on the current URL
const getTitle = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Cards 1';
    case '/cards2':
      return 'Cards 2';
    case '/charts':
      return 'Charts';
    case '/users':
      return 'Table';
    default:
      // This handles the dynamic user detail page title
      if (pathname.startsWith('/users/')) {
        return 'User Details';
      }
      return 'Dashboard';
  }
};

function App() {
  // State to manage whether the sidebar is open or closed
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // Get the current page's location to update the header title
  const location = useLocation();
  const title = getTitle(location.pathname);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Header title={title} onMenuClick={toggleSidebar} />
      <main>
        {/* Defines all the application's routes */}
        <Routes>
          <Route path="/" element={<Cards1 />} />
          <Route path="/cards2" element={<Cards2 />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/users" element={<Users />} />
          {/* This is a dynamic route for individual user pages */}
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
