import React from 'react';
import './Main.css';

// form
import { FaPlus } from 'react-icons/fa';

class Main extends React.Component {
  state = {
    novaTarefa: '',
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
        <h1>Lista de tarefas</h1>
        <form className="form" action="#">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}

export default Main;
