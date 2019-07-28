import React from 'react'
import './row.css'

export default class Row extends React.Component {

    render() {
        const {left, right} = this.props;
        return (<React.Fragment>
            <div className="row mb2">
                <div className="col-md-6">
                    {left}
                </div>
                <div className="col-md-6">
                    {right}
                </div>
            </div>
        </React.Fragment>)
    }
}