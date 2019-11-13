import React, {Component} from "react";
import State from "../_shared/model/timer.state";
import {Subscription, timer} from "rxjs";

export class Timer extends Component {
    public state: State;
    public subscriptionTimer!: Subscription;
    public readonly oneSecond = 1000;

    constructor(props: any) {
        super(props);
        this.state = {timer: 0};
    }

    componentDidMount(): void {
        const timer$ = timer(0, this.oneSecond);

        this.subscriptionTimer = timer$.subscribe((result) => {
            this.setState({timer: result});
        });
    }

    componentWillUnmount(): void {
        this.subscriptionTimer.unsubscribe();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {timer} = this.state;
        return (
            <section>
                <h2>Interval</h2>
                <div>
                    <h3>on Input</h3>
                    <p>an interval of {this.oneSecond / 1000} second</p>
                    <p>who take a count by 3</p>
                </div>
                <div>
                    <h3>on Output</h3>
                    in console: each second the next interval value is count. {timer}
                </div>
            </section>
        );
    }
}
