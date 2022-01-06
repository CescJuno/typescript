import { Provider } from 'react-redux';
import { hydrate, render } from 'react-dom';
// import create from 'reducers/create';
import createToolkit from 'reducers/createToolkit';
import App from './App';

// const store = create();
const store = createToolkit;
// const store = configureStore({
//   reducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({ immutableCheck: false }).concat(progressMiddleware),
//   devTools: process.env.NODE_ENV !== `production`,
// });
const rootElement = document.getElementById('root');

if (rootElement === null || rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
