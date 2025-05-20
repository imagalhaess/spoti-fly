# Spoti-Fly

O Spoti-Fly é uma plataforma de streaming desenvolvida como parte de um desafio técnico para vaga de desenvolvedora pleno. A aplicação tem como objetivo oferecer uma experiência simples de gerenciamento de playlists de músicas, com frontend em React, backend em Node.js, banco de dados relacional e funcionalidades completas de CRUD.

> O projeto também é uma oportunidade prática de aplicar conhecimentos de arquitetura de software, Gitflow, testes automatizados, containerização com Docker e consumo de API externa.

---

## Tecnologias e Ferramentas

- React (Vite + React Router)
- Node.js com Express
- PostgreSQL com Prisma ORM
- Docker e Docker Compose
- Git e Gitflow
- Jest (testes unitários e integração)
- API externa (Lyrics.ovh ou Deezer API)

---

## Funcionalidades previstas

- [x] Listar playlists
- [x] Criar nova playlist
- [ ] Adicionar músicas a uma playlist
- [ ] Visualizar detalhes de uma playlist
- [ ] Consumir dados de uma API externa (letras ou capas)
- [ ] Realizar login e proteger rotas com JWT
- [ ] Dockerizar aplicação (frontend + backend + banco)
- [ ] Cobertura de testes acima de 25%

---

## Estrutura do projeto

```
.
├── frontend         # Aplicação React
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── routes
│   └── ...
├── backend          # API Node.js
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   └── middlewares
│   └── ...
├── db               # Scripts e seed do banco
├── docs             # Documentação e prints
└── README.md
```

---

## Como rodar o projeto (em breve)

Instruções para rodar localmente com ou sem Docker serão adicionadas na medida em que os módulos forem construídos.

---

## Fluxo Git com Gitflow

- `main`: branch de produção (entregas finalizadas)
- `develop`: branch de desenvolvimento principal
- `feature/*`: branches por funcionalidade
- `bugfix/*`, `hotfix/*`: correções específicas

Exemplo de criação de branch:

```bash
git checkout -b feature/frontend-setup
```

---

## Plano de Ação (Cronograma de Execução)

| Etapa | Descrição                                                                         |
| ----- | --------------------------------------------------------------------------------- |
| Dia 1 | Setup do projeto, criação do repositório, estrutura base do frontend (React)      |
| Dia 2 | Backend com Node.js + Express, definição das rotas, modelo de dados inicial       |
| Dia 3 | Banco de dados relacional, relacionamento entre entidades, integração com backend |
| Dia 4 | Frontend: criação de formulários e listagem funcional com consumo da API          |
| Dia 5 | Dockerização, testes com Jest, finalização da documentação e entrega              |

---

## Organização e Kanban

Todas as tarefas do projeto estão organizadas no GitHub Projects:  
🔗 [Acesse o Quadro de Tarefas](https://github.com/imagalhaess/spoti-fly/projects?query=is%3Aopen)

---
