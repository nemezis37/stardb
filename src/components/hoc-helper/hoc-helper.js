import React from 'react'
import Spinner from '../spinner';

const withData = (View, getData) => {
    return class extends React.Component {

        componentDidMount() {
            getData().then((data) => { this.setState({ data }); })
        }

        state = {
            data: null
        };

        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />
            }
            return <View {...this.props} data={data} />
        }
    }
}

const detailsWithData = (View, getData, getImage) => {
    return class extends React.Component {
        state = {
            item: null,
            image: null,
            loading: true
          }
        
          componentDidMount() {
            this.updateItem();
          }
        
          componentDidUpdate(prevSate) {
            if (this.props.selectedItemId === prevSate.selectedItemId) {
              return;
            }
            this.updateItem();
          }
        
          updateItem() {
            if (!this.props.selectedItemId) {
              return;
            }
            this.setState({ loading: true })
            getData(this.props.selectedItemId)
              .then((item) => { this.setState({ item, loading: false, image: getImage(this.props.selectedItemId) }) })
          }
        
          render() {
        
            if (!this.props.selectedItemId) {
              return (<span>Please select character</span>)
            }
        
            const { loading } = this.state;
            const spinner = loading ? <Spinner /> : null
        
            const itemDetails = loading ? null : <View {...this.props} item={this.state.item} image={this.state.image} />
        
            return (
              <div className="item-details card">
                {spinner}
                {itemDetails}
              </div>
            )
          }
    }
}

export {withData, detailsWithData};