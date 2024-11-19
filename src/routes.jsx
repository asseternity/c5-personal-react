import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from './components/login';
import { TestComponent, TestChildComponent } from './components/test';
import { Newsletter } from './components/newsletter';
import { Index } from './components';

const routes = [
  <Route key="/" path="/" element={<Index />} />,
  <Route key="/test" path="/test" element={<TestComponent />} />,
  <Route key="/main" path="/main" element={<Newsletter />} />,
  <Route key="/login" path="/login" element={<Login />} />,
];

export { routes };
