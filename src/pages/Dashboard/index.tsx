import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories } from "./styles";
import logoImage from "./../../assets/logo.svg";
import api from "./../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo("");
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button>Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(({ description, full_name, owner }: Repository) => (
          <a href="test">
            <img src={owner.avatar_url} alt={owner.login} />
            <div>
              <strong>{full_name}</strong>
              <p>{description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
