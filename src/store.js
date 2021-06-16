import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    // codigo para react developtools 
    //https://github.com/zalmoxisus/redux-devtools-extension
    typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        //se valida que este instalado el complemento en el navegador   
    )
);

export default store;
//el store se utilizara en el componente principal para que fluyan los datos