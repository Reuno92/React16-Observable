import React, {Component} from 'react';
import {Delay} from "./simpleObservable/delay";
import {Concat} from "./simpleObservable/concat";
import {Timer} from './simpleObservable/timer';

class SimpleObservable extends Component {

    render() {
        return (
            <section className="card-columns">
                <Timer />
                <Concat />
                <Delay />
            </section>
        )
    }
}

export default SimpleObservable;
