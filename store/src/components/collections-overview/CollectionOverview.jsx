import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/Preview-Collection';
import { selectcollections } from '../../redux/shop/ShopSelector';

function CollectionOverview({collections}) {
    return (
        <div className="collections-overview">
            {collections.map(({id,...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections:selectcollections
})

export default connect(mapStateToProps)(CollectionOverview);