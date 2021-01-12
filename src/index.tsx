import React from 'react'
import ReactDOM from 'react-dom'

const render = async (): Promise<void> => {
  const App = (await import('./App')).default

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render()
