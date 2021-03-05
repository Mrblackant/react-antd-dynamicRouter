import logo from './logo.svg'
import './App.css'
import TypeDemo from './typeScript'
import HookDemo from './typeScript/hooks'
import Context from './typeScript/createContext'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypeDemo />
        <h1>Hooks</h1>
        <HookDemo />
        <h1>createContext,父子</h1>
        <Context />
      </header>
    </div>
  )
}

export default App
