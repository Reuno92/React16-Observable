import React, {Component} from "react";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

export class Delay extends Component {

    constructor(props: any) {
        super(props);
        this.getDelay();
    }

    public readonly oneSecond = 1000;
    public obsArrayOneTwoThree$: Observable<Array<Number>> = of([1, 2, 3]);
    public inputDelay: Array<Number> = [];

    private getDelay(): void {
        this.obsArrayOneTwoThree$.subscribe((x) => {
            this.inputDelay.push(...x);
        });

        this.obsArrayOneTwoThree$.pipe(
            delay(this.oneSecond)
        ).subscribe(x => console.log('after one second return ', x));
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <section>
                <h2>Delay</h2>
                <div>
                    <h3>on Input</h3>
                    <p>an Array of three number like {this.inputDelay.join(', ')}</p>
                </div>
                <div>
                    <h3>on Output</h3>
                    <p>after {this.oneSecond / 1000} second return [ {this.inputDelay.join(',')} ]</p>
                </div>
            </section>
        );
    }
}
