import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {values: {}}
  }

  onSubmit = (event) => {
    event.preventDefault()
    alert('Submeteu form')
  }

  onChangeField = (event) => {
    const {values} = this.state
    const {target: {name, value}} = event

    let change = values
    change[name] = value
    this.setState(change)
  }

  render() {
    const {values} = this.state
    const {onChangeField, onSubmit} = this
    return (
      <form onSubmit={onSubmit}>
        <h3>Form genérico</h3>
        {this.props.render(onChangeField, values)}
        <button type="submit">Enviar</button>
      </form>
    )
  }
}
