import React from "react";
import styled from "styled-components";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faEdit,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const SpanIcons = styled.span`
  margin-right: 10px;
  cursor: pointer;
`;

const LinhaTarefa = styled.div`
  display: flex;
  margin: 10px 0 5px 0;
`;

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.span`
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
    tarefasParaFiltrar: [],
    inputValue: "",
    filtro: "",
    aoEditar: false,
    tarefaIdEditar: 0,
    inputEdicao: "",
    estadoEdicao: "",
    inputFiltro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("listaTarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    this.setState({
      tarefas: JSON.parse(localStorage.getItem("listaTarefas")),
      tarefasParaFiltrar: JSON.parse(localStorage.getItem("listaTarefas")),
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
      tarefasParaFiltrar: [...this.state.tarefas, novaTarefa],
    });
  };

  selectTarefa = (id) => {
    const tarefasModificadas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, completa: true };
      }
      return tarefa;
    });

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
      tarefasParaFiltrar: novaLista,
    });
  };

  onClickEditaTarefa = (tarefa) => {
    this.setState({
      aoEditar: true,
      tarefaIdEditar: tarefa.id,
      inputEdicao: tarefa.texto,
      estadoEdicao: tarefa.completa ? "completa" : "pendente",
    });
  };

  onChangeInputEdicao = (event) => {
    this.setState({
      inputEdicao: event.target.value,
    });
  };

  onChangeEstadoEdicao = (event) => {
    this.setState({
      estadoEdicao: event.target.value,
    });
  };

  onClickSalvaEdicao = () => {
    const tarefasEditadas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === this.state.tarefaIdEditar) {
        return {
          ...tarefa,
          texto: this.state.inputEdicao,
          completa: this.state.estadoEdicao === "completa" ? true : false,
        };
      }
      return tarefa;
    });

    this.setState({
      tarefas: tarefasEditadas,
      tarefasParaFiltrar: tarefasEditadas,
      aoEditar: false,
      tarefaIdEditar: 0,
      inputEdicao: "",
      estadoEdicao: "",
    });
  };

  renderizaSecaoEdicao = () => {
    return (
      <InputsContainer>
        <input
          onChange={this.onChangeInputEdicao}
          value={this.state.inputEdicao}
        />

        <label>
          <input
            type="radio"
            value="pendente"
            checked={this.state.estadoEdicao === "pendente"}
            onChange={this.onChangeEstadoEdicao}
          />
          Pendente
        </label>

        <label>
          <input
            type="radio"
            value="completa"
            checked={this.state.estadoEdicao === "completa"}
            onChange={this.onChangeEstadoEdicao}
          />
          Completa
        </label>
        <FontAwesomeIcon
          icon={faCheckCircle}
          size="lg"
          color="#2ecc71"
          cursor="pointer"
          onClick={this.onClickSalvaEdicao}
        />
      </InputsContainer>
    );
  };

  onClickApagaTarefas = () => {
    this.setState({
      tarefas: [],
      tarefasParaFiltrar: [],
    });
  };

  onChangeInputFiltro = (event) => {
    const listAtualizada = this.state.tarefas.filter((tarefa) => {
      return (
        tarefa.texto.toLowerCase().search(event.target.value.toLowerCase()) !==
        -1
      );
    });

    this.setState({
      inputFiltro: event.target.value,
      tarefasParaFiltrar: listAtualizada,
    });
  };

  onClickOrdena = (tipo) => {
    let listaOrdenada;
    if (tipo === "cres") {
      listaOrdenada = this.state.tarefas.sort((tarefaA, tarefaB) => {
        return tarefaA.texto.localeCompare(tarefaB.texto);
      });
    } else {
      listaOrdenada = this.state.tarefas.sort((tarefaA, tarefaB) => {
        return tarefaB.texto.localeCompare(tarefaA.texto);
      });
    }
    console.log(listaOrdenada);
    this.setState({
      tarefas: listaOrdenada,
      tarefasParaFiltrar: listaOrdenada,
    });
  };

  render() {
    const listaFiltrada = this.state.tarefasParaFiltrar.filter((tarefa) => {
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
          <input
            placeholder="Filtre pelo nome"
            value={this.state.inputFiltro}
            onChange={this.onChangeInputFiltro}
          />
        </InputsContainer>
        <br />

        <InputsContainer>
          <button onClick={this.onClickApagaTarefas}>Apagar Tarefas</button>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <br />

        <InputsContainer>
          <button onClick={() => this.onClickOrdena("cres")}>
            Alfabética crescente
          </button>
          <button onClick={() => this.onClickOrdena("decre")}>
            Alfabética decrescente
          </button>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada
            .sort((tarefaA, tarefaB) => {
              if (tarefaA.completa === tarefaB.completa) {
                return 0;
              } else if (tarefaA.completa) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((tarefa) => {
              return (
                <LinhaTarefa key={tarefa.id}>
                  <SpanIcons>
                    <FontAwesomeIcon
                      icon={faEdit}
                      size="lg"
                      color="#e67e22"
                      onClick={() => this.onClickEditaTarefa(tarefa)}
                    />
                  </SpanIcons>
                  <SpanIcons>
                    <FontAwesomeIcon
                      icon={faWindowClose}
                      size="lg"
                      color="#e74c3c"
                      onClick={() => this.onClickRemoveTarefa(tarefa.id)}
                    />
                  </SpanIcons>
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

        {this.state.aoEditar && this.renderizaSecaoEdicao()}
      </div>
    );
  }
}

export default App;
