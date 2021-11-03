import { RouteItemsInterface } from '_common/utils/routes';
import SomeBlockPage from './pages/SomeBlockPage';
import NotFoundPage from './pages/NotFoundPage';

const routes: RouteItemsInterface = {
  index: {
    exact: true,
    path: '/some-block',
    component: SomeBlockPage,
    pageTitle: 'SomeBlock',
  },
  other: {
    path: '*',
    component: NotFoundPage,
    pageTitle: '404',
  },
};

export default routes;
