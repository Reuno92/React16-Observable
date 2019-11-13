import React, {Component} from "react";
import State from "../_shared/model/timer.state";
import {Observable, Subscription, timer} from "rxjs";

export class Timer extends Component {
    public state: State;

    public dueTime: number;
    public subscriptionTimer!: Subscription;

    public subscriptionDate!: Subscription;
    public readonly oneSecond: number = 1000;

    public timer$: Observable<number>;

    constructor(props: any) {
        super(props);
        this.state = {timer: 'Not beginning'};
        this.dueTime = 2;
        this.timer$ = new Observable<number>();
    }

    componentDidMount(): void {

        this.timer$ = timer(this.dueTime * 1000, this.oneSecond);

        this.subscriptionTimer = this.timer$.subscribe((result) => {
            this.setState({timer: result });
        });
    }

    componentWillUnmount(): void {
        this.subscriptionTimer.unsubscribe();
        this.subscriptionDate.unsubscribe();
    }

    getTimer(timer: any): React.ReactElement<any> | undefined {
        if (typeof timer === 'string') {
            return <span className="alert alert-danger py-1 px-2">{timer}</span>
        } else if (timer === 0) {
            return <span className="badge badge-pill badge-danger">{timer}</span>
        } else if (timer >= 1 && timer <= 3) {
            return <span className="badge badge-pill badge-warning">{timer}</span>
        } else if (timer >= 4 && timer <= 6) {
            return <span className="badge badge-pill badge-success">{timer}</span>
        } else if (timer >= 7) {
            return <span className="badge badge-pill badge-info">{timer}</span>
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { timer } = this.state;
        return (
            <section className="card">
                <div className="card-header">
                    <h2 className="card-title">Timer</h2>
                </div>
                <div className="card-body">
                    <h3>on Input</h3>
                    <p>an interval of {this.oneSecond / 1000} second</p>
                    <p>who take a count by 3</p>
                </div>
                <div className="card-footer">
                    <h3>on Output</h3>
                    <p>in console: each second the next interval value is count.</p>
                    Timer: { this.getTimer(timer)}
                </div>
            </section>
        );
    }
}
