import { combineReducers } from 'redux';
import UserReducer from './user/UserReducer';
import cardReducer from './cart/CartReducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/DirectoryReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: UserReducer,
    cart: cardReducer,
    directory:directoryReducer
});

export default persistReducer(persistConfig,rootReducer)