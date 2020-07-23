import React from "react";
import { Title, Form, Repositories } from "./styles";
import logoImage from "./../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img src="" alt="Nome" />
          <div>
            <strong>Titulo</strong>
            <p>Descrição</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
