import React from "react";
import { Title, Form } from "./styles";
import logoImage from "./../../assets/logo.svg";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
