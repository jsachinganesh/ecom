import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
// import { selectcollections } from '../../redux/shop/ShopSelector';
// import SHOP_DATA from '../../redux/shop/shop.data'
import { Route } from 'react-router-dom';
import Collection from '../collection/Collections';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/ShopAction';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);
console.log("fdfd",CollectionPageWithSpinner);


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot((snapShot) => {
            const colMap = convertCollectionSnapshotToMap(snapShot);
            this.props.updateCollections(colMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={this.state.loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={this.state.loading} {...props} />} />
        </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: colMap => dispatch(updateCollections(colMap))
});

export default connect(null,mapDispatchToProps)(Shop);




// function Shop({match}){
//     return (
      
//     );
    
// }


// export default Shop;