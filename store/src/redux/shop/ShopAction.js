import ShopActionTypes from './ShopTypes';

export const updateCollections = (colMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload:colMap
})
