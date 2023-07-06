import React from 'react'
import ReactDOM from 'react-dom/client'
import  routes  from "../src/routes/index.tsx";
import './index.css'
import { RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './redux/app/store'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <Provider store={store}>
 <RouterProvider router={routes} />
  </Provider>  
  </React.StrictMode>
);
