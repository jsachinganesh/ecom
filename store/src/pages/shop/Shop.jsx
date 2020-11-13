// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../components/collections-overview/CollectionOverview';
// import { selectcollections } from '../../redux/shop/ShopSelector';
// import SHOP_DATA from '../../redux/shop/shop.data'
import { Route } from 'react-router-dom';
import Collection from '../collection/Collections';

function Shop({match}){
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
    
}


export default Shop;



