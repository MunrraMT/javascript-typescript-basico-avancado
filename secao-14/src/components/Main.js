import React from 'react';
import './Main.css';

// function Main() {
//   return <h1>Meu component com estado!</h1>;
// }

class Main extends React.Component {
  state = {
    novaTarefa: 'Lista de tarefas',
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>{novaTarefa || 'Lista de tarefas'}</h1>
        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Main;
