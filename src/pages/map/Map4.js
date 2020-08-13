import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import {enhanceReduxMiddleware} from 'kepler.gl/middleware';
import KeplerGl from 'kepler.gl';

const initialState = {};
const reducers = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer,

  // Your other reducers here
  app: appReducer
});

// using createStore
export default createStore(
  reducer,
  initialState,
  applyMiddleware(
    enhanceReduxMiddleware([
      /* Add other middlewares here */
    ])
  )
);

const Map = props => (
    <KeplerGl
      id="foo"
      width={width}
      mapboxApiAccessToken={token}
      height={height}
    />
  );