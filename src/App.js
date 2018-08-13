import React, {Component} from 'react'
import Form from './components/Form'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form
          render={(onChangeField, values) => (
            <div>
              <label htmlFor="name">Nome</label>
              <input name="name" type="text" onChange={onChangeField} />
              <label htmlFor="phone">Telefone</label>
              <input name="phone" type="text" onChange={onChangeField} />
              {JSON.stringify(values)}
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
