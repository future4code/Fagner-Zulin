import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import imagemPerfil from "./img/foto-perfil.jpeg";
import imagemEmail from "./img/marketing-de-email.png";
import imagemEndereco from "./img/endereco.png";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={imagemPerfil}
          nome="Fagner Alexandre Zulin"
          descricao="Olá 🖐🏽, me chamo Fagner, e sou estudante de Desenvolvimento Web Full Stack na Labenu 🧡"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          img={imagemEmail}
          tipoInfo="E-mail"
          info="fagnerzulin11@gmail.com"
        />

        <CardPequeno
          img={imagemEndereco}
          tipoInfo="Endereço"
          info="Rua das Pedras, 214"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://unifil.br/assets/uploads/2019/10/logo.svg"
          nome="UniFil"
          descricao="Técnico de Suporte Júnior"
        />

        <CardGrande
          imagem="https://plataformafasttrade.com.br/wp-content/uploads/2019/11/sanepar.png"
          nome="Sanepar"
          descricao="Estagiário de Suporte ao Usuário"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQHcsvhRhKlGIA/company-logo_200_200/0/1519899747083?e=1623283200&v=beta&t=BbmA5jEJlKHKw6ccvXdF0Osr2bI6ggCC7NTlp8t5NqE"
          nome="Hospital Evangélico de Londrina"
          descricao="Auxíliar de Farmácia"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQGFZ4FOMrYhgQ/company-logo_200_200/0/1598875061158?e=1623283200&v=beta&t=VOjy2UR4Ueu-crfHDpfgVqN3zdQw7W6quVF6EKhmSr4"
          nome="Trimble"
          descricao="Estagiário de Infraestrutura de TI"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
