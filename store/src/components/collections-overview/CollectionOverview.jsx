import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/Preview-Collection';
import { selectCollectionsForPreview } from '../../redux/shop/ShopSelector';

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
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);