import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Header, RepositoryInfo } from "./styles";
import logo from "./../../assets/logo.svg";
import { FiChevronLeft } from "react-icons/fi";
interface Repository {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Repository>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />

        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header></header>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
