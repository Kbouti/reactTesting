import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

import Hello from './hello'

import RenderName from './renderName'

const kevin = "Kevdawg"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />
    <RenderName name={kevin} />
  </React.StrictMode>,
)
