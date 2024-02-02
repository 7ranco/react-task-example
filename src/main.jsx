import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TaskContextProvider} from './context/TaskContext.jsx';

// La etiqueta <React.StrictMode> se usa para entender que hay una parte del código que se va ejecutar en desarrollo en caso de que hayan errores (Buena práctica)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
