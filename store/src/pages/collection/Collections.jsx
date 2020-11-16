import React from 'react';
import './Collections.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/ShopSelector';

function Collection({ collection}) {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state),
    }
}

export default connect(mapStateToProps)(Collection);

