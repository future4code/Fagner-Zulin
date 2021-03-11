import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import iconeSalvoPreto from "../../img/bookmark_black.svg";
import iconeSalvoBranco from "../../img/bookmark_border_black.svg";
import iconeCompartilhar from "../../img/share_black.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import Icone from "../Icone/Icone";
import SecaoCompartilhar from "../SecaoCompartilhar/SecaoCompartilhar";

class Post extends React.Component {
  state = {
    compartilhar: false,
    salvo: false,
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
  };

  aoCompatilharPost = () => {
    this.setState({
      compartilhar: false,
    });
  };

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar ? true : false,
    });
  };

  onClickSalvo = () => {
    this.setState({
      salvo: this.state.salvo === false ? true : false,
    });
  };

  onClickCurtida = () => {
    this.setState({
      curtido: this.state.curtido === false ? true : false,
      numeroCurtidas:
        this.state.curtido === false
          ? this.state.numeroCurtidas + 1
          : this.state.numeroCurtidas - 1,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    const iconeSalvo = this.state.salvo ? iconeSalvoPreto : iconeSalvoBranco;

    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <div className={"post-container"}>
        <div className={"post-header"}>
          <img
            className={"user-photo"}
            src={this.props.fotoUsuario}
            alt={"Imagem do usuario"}
          />
          <p>{this.props.nomeUsuario}</p>
        </div>

        <img
          className={"post-photo"}
          src={this.props.fotoPost}
          alt={"Imagem do post"}
        />

        <div className={"post-footer"}>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <div className="post-footer-right">
            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />
            <Icone icone={iconeSalvo} onClickIcone={this.onClickSalvo} />
            <Icone
              icone={iconeCompartilhar}
              onClickIcone={this.onClickCompartilhar}
            />
          </div>
        </div>
        {componenteComentario}
        {this.state.compartilhar && (
          <SecaoCompartilhar aoCompartilhar={this.aoCompatilharPost} />
        )}
      </div>
    );
  }
}

export default Post;
