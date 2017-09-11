import React from 'react';
import ReactDOM from "react-dom"
import TestContainer from './container/TestContainer';
import Test1 from './component/Test1';
import { HashRouter as Router,Route, Link,Redirect} from 'react-router-dom';

import 'config';

const Root = () => {
   return (
        <Router
            basename="luwei"
            getUserConfirmation={console.log('1203===')}>
            <ul>
                <li><Link to='/test'>test</Link></li>
                <li><Link to={{pathname: '/test1',search:'se',hash:'#the-hash',state:{from:true}}}>test1</Link></li>
               <Route path="/test1" component={Test1}/>
               <Route path="/test" component={TestContainer}/><Redirect to="" from=""/>
            </ul>
        </Router>
    )
}
ReactDOM.render(
   <Root/>,
    document.getElementById('root')
);
