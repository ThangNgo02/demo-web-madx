import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'solutions', element: <Solutions /> },
      { path: 'products', element: <Products /> },
      { path: 'services', element: <Services /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'case-studies/:id', element: <CaseStudyDetail /> },
      { path: 'about', element: <About /> },
      { path: 'resources', element: <Resources /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);
