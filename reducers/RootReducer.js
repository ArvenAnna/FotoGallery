import {combineReducers} from 'redux';
// import MainPageReducer from './MainPageReducer';
// import SidebarReducer from './SidebarReducer';
// import IngridientReducer from './IngridientReducer';
// import ErrorReducer from './ErrorReducer';
// import CreateReceptReducer from './CreateReceptReducer';
import AlbumReducer from "./AlbumReducer";

const RootReducer = combineReducers(Object.assign({},
    // SidebarReducer,
    // MainPageReducer,
    // IngridientReducer,
    // ErrorReducer,
    // CreateReceptReducer,
    AlbumReducer
));

export default RootReducer;