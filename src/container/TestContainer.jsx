import React,{ Component } from 'react';
import Test from '../component/Test';

class TestContainer extends Component{
    render(){
        return(
            <div>
                <p>name</p>
                <Test/>
            </div>
        );
    }
}
export default TestContainer;