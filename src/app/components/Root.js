/**
 * Created by Talel on 2018-10-23.
 */
import React from "react";

import {Header} from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}