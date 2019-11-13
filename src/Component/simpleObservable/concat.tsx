import React, {Component} from "react";
import {concat, Observable, of} from "rxjs";

export class Concat extends Component {

    public readonly streamOne$: Observable<Array<Number>> = of([1]);
    public readonly streamTwo$: Observable<Array<Number>> = of([2]);

    public streamConcat$ = concat(this.streamOne$, this.streamTwo$);
    public outputOne: any;
    public outputTwo: any;
    public outputConcat: any;

    public constructor(props: any) {
        super(props);
        this.getConcat();
    }

    private getConcat(): void {
        this.streamOne$.subscribe((x) => this.outputOne = x);
        this.streamTwo$.subscribe((x) => this.outputTwo = x);

        this.streamConcat$.subscribe(
            (x) => {
                this.outputConcat = x;
                console.log('concat', x)
            },
            (err) => console.log(err),
            () => console.log('concat complete !')
        );
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
                <section className="card">
                    <div className="card-header">
                        <h2>Concat two array in one Observable</h2>
                    </div>
                    <div className="card-body">
                        <h3>Two Array Number Observable on inputs</h3>
                        <p>First stream Array: [{this.outputOne}]</p>
                        <p>Second stream Array: [{this.outputTwo}]</p>
                    </div>
                    <div className="card-footer">
                        <h3>First operation</h3>
                        <p>Concatenation with concat() show your console 'concat'. the last number is : {this.outputConcat}</p>
                    </div>
                </section>

        );
    }
}
