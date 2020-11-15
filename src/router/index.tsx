import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Loading from './loading';
import { createHashHistory } from 'history';
import Loadable from 'react-loadable';
const App = Loadable({
  loader: () => import('Containers/App'),
  loading: Loading
});
const Home = Loadable({
  loader: () => import('Containers/Home'),
  loading: Loading
});
const ArticleDetail = Loadable({
  loader: () => import('Containers/ArticleDetail'),
  loading: Loading
});
const Tools = Loadable({
  loader: () => import('Containers/Tools'),
  loading: Loading
});
const Study = Loadable({
  loader: () => import('Containers/Study'),
  loading: Loading
});

const Login = Loadable({
  loader: () => import('Containers/Login'),
  loading: Loading
});

const Search = Loadable({
  loader: () => import('Containers/Search'),
  loading: Loading
});

const User = Loadable({
  loader: () => import('Containers/User'),
  loading: Loading
});

const Comment = Loadable({
  loader: () => import('Containers/Comment'),
  loading: Loading
});

const About = Loadable({
  loader: () => import('Containers/About'),
  loading: Loading
});

const routeConfig = [
  {
    component: App,
    path: '/app/:id'
  },
  {
    component: ArticleDetail,
    path: '/article/:id'
  },
  {
    component: Tools,
    path: '/tools'
  },
  {
    component: Study,
    path: '/study'
  },
  {
    component: Login,
    path: '/login'
  },
  {
    component: Search,
    path: '/search/:key'
  },
  {
    component: User,
    path: '/user'
  },
  {
    component: Comment,
    path: '/comment'
  },
  {
    component: About,
    path: '/about'
  }
];
const history = createHashHistory();
const router = () => (
  <Router history={history}>
    <Switch>
      {routeConfig.map((item) => (
        <Route
          path={item.path}
          exact={true}
          key={item.path}
          component={item.component}
        ></Route>
      ))}
    </Switch>
    {/* 首页列表做缓存处理 */}
    <CacheSwitch>
      <CacheRoute exact path='/' component={Home} when='always' />
    </CacheSwitch>
  </Router>
);
export default router;
