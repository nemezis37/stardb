import React from 'react'
import './error-boundry.css'
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends React.Component {

    state = {
        hasError: false
    }

    render() {
        if (this.props.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }
}
