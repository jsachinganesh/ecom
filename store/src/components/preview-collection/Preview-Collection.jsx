import React from 'react'
import CollectionItem from '../collection-item/CollectionItem';
import './Preview-Collection.scss'

export default function PreviewCollection(props) {
    const { title, items } = props;
    console.log(props);
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item,idx)=> idx<4).map((item) => (
                    <CollectionItem key={item.id}  item={item} />
                ))}
            </div>
        </div>
    )
}
