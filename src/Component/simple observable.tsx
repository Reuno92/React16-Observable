import React, {Fragment} from 'react';
import {Delay} from "./simpleObservable/delay";
import {Concat} from "./simpleObservable/concat";
import {Timer} from './simpleObservable/timer';

class SimpleObservable extends React.Component {

    render() {
        return (
            <Fragment>
                <Timer />
                <Concat />
                <Delay />
            </Fragment>
        )
    }
}

export default SimpleObservable;
