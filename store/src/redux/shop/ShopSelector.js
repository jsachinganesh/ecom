import { createSelector } from "reselect";
// import collections from "../../pages/collection/collections";

const selectShop = state => state.shop;

export const selectcollections = createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectcollections],
    collections => collections ?  Object.keys(collections).map((key) =>  collections[key]):[]
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectcollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

