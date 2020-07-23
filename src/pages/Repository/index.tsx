import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Header, RepositoryInfo, Issues } from "./styles";
import logo from "./../../assets/logo.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
interface Repository {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Repository>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img />
          <div>
            <strong></strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`repositories/${1}`}>
          <div>
            <strong>{1}</strong>
            <p>{1}</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
