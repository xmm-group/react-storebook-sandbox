import React from 'react';
import { useLocation } from 'react-router-dom';

import RoutesInspectorLayout from 'layouts/routes_inspector';
import SandboxLayout from 'layouts/sandbox';
import '_common/ui/index.scss';

function App() {
  const location = useLocation();
  const layout = location.pathname.split('/')[1];

  if (layout === 'routes-inspector') {
    return <RoutesInspectorLayout />;
  }
  return <SandboxLayout />;
}

export default App;
