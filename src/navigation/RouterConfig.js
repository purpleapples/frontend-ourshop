import { Switch, Route } from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import {NotFound} from './NotFound';
import Home from 'pages/Home';
// import {Schedule} from 'pages/Schedule';
import {ACCOUNTBOOK, ROOT, SCHEDULE} from './CONSTANTS';
import AccountBook from "pages/AccountBook";
// all routes are here

export const RouterConfig = () => {
    return (
        <Switch>
            <Route exact path={ROOT} component={Home} />            
            {/* <Route exact path={SCHEDULE} component={Schedule} /> */}
            <Route exact path={ACCOUNTBOOK} component={AccountBook} />
        
        {/* 모든 권한으로 보호받는 routes 는 여기*/}


        {/* 404 page not found 는 Home 으로 redirect*/}
        <Route path="*">
            <NotFound />            
        </Route>
        </Switch>
    )

}

export default RouterConfig;