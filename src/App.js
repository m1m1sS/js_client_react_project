import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from 'redux-thunk';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home';

const store = createStore(reducers, applyMiddleware(thunk));

const Layout = props => (
    <>
        <Header/>
        <div className="container mt-5">
            {props.children}
        </div>

        <Footer/>
    </>
)
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Layout>
            <Home/>
        </Layout>
    },
    {
        path: '/movies',
        exact: false,
        main: () => <Layout>
            This is Movies page.
            {/* <ClassComponent/> */}
        </Layout>
    },
    {
        path: '/favorites',
        exact: false,
        main: () => <Layout>
            This is Favorites page.
            {/* <ClassComponent/> */}
        </Layout>
    },
    {
        path: '/moviedetails/:id',
        exact: false,
        main: () => <Layout>
            This is Movie Details page.
            {/* <MovieDetails/> */}
        </Layout>
    }
]

const getRoutes = () => {
    return routes.map((route, index) => {
        return <Route
            exact={route.exact} 
            key={index}
            path={route.path}>
            {route.main}
        </Route>
    })
}
function App() {
    return <Provider store={store}> 
        <Router>
            <Switch>
                {getRoutes()}
            </Switch>
        </Router>
    </Provider>
}

export default App;
