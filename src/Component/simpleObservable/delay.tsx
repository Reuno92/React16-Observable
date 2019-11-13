import React, {Component} from "react";
import {Observable, of, range} from "rxjs";
import {delay} from "rxjs/operators";

export class Delay extends Component {

    public min: number;
    public max: number;
    public second: number;

    public duration: number;
    public readonly oneSecond = 1000;
    public array: Array<number>;
    public source: Observable<number>;
    public obsArrayOneTwoThree$: Observable<Array<Number>>;
    public inputDelay: Array<Number> = [];

    constructor(props: any) {
        super(props);

        this.min = 1;
        this.max = 10;
        this.second = 3;

        this.duration = this.second * this.oneSecond;

        this.array = Array<number>();
        this.source = range(this.min, this.max);
        this.source.subscribe(
            value => this.array.push(value)
        );
        this.obsArrayOneTwoThree$ = of(this.array);
        this.getDelay();
    }

    private getDelay(): void {
        // For display
        this.obsArrayOneTwoThree$.subscribe((x) => {
            this.inputDelay.push(...x);
        });

        this.obsArrayOneTwoThree$.pipe(
            delay(this.duration)
        ).subscribe(
            x => console.log(`return`, x),
            err => console.log(err),
            () => console.log(`after delay of ${(this.duration / 1000)} seconds`)
        );
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <section className="card">
                <div className="card-header">
                    <h2 className="card-title">Delay after {this.duration/ this.oneSecond} second</h2>
                </div>
                <div className="card-body">
                    <h3>on Input</h3>
                    <p>an Array of three number like {this.inputDelay.join(', ')}</p>
                </div>
                <div className="card-footer">
                    <h3>on Output</h3>
                    <p>after { (this.duration) / 1000} seconds return [{this.inputDelay.join(',')}]</p>
                </div>
            </section>
        );
    }
}
