import React from 'react';
import './Main.css';

// form
// eslint-disable-next-line import/no-duplicates
import { FaPlus } from 'react-icons/fa';

// tarefas
// eslint-disable-next-line import/no-duplicates
import { FaEdit, FaWindowClose } from 'react-icons/fa';

class Main extends React.Component {
  state = {
    novaTarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar Javascript',
      'Estudar ReactJS',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form className="form" action="#">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
