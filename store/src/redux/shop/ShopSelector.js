import { createSelector } from "reselect";
// import collections from "../../pages/collection/collections";

const selectShop = state => state.shop;

export const selectcollections = createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectcollections],
    collections => Object.keys(collections).map((key) => {
        return collections[key];
    })
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectcollections],
    collections => collections[collectionUrlParam]
)