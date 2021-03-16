import React from "react";
import styled from "styled-components";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const LinhaTarefa = styled.div`
  display: flex;
  margin: 10px 0 5px 0;
`;

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.span`
  margin-left: 10px;
  font-size: 1.2em;
  text-align: left;
  cursor: pointer;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("listaTarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    this.setState({
      tarefas: JSON.parse(localStorage.getItem("listaTarefas")),
    });
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    this.setState({
      tarefas: [...this.state.tarefas, novaTarefa],
    });
  };

  selectTarefa = (id) => {
    const tarefasModificadas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, completa: true };
      }
      return tarefa;
    });
    console.log(tarefasModificadas);
    this.setState({
      tarefas: tarefasModificadas,
    });
  };

  onChangeFilter = (event) => {
    console.log(event.target.value);
    this.setState({
      filtro: event.target.value,
    });
  };

  onClickRemoveTarefa = (id) => {
    const novaLista = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });

    this.setState({
      tarefas: novaLista,
    });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <LinhaTarefa key={tarefa.id}>
                <FontAwesomeIcon
                  icon={faWindowClose}
                  size="lg"
                  color="#e74c3c"
                  cursor="pointer"
                  onClick={() => this.onClickRemoveTarefa(tarefa.id)}
                />
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
              </LinhaTarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
