# Estrutura do Projeto e Gitflow – Spoti-Fly

Este documento detalha como está organizada a estrutura de diretórios do projeto, bem como o fluxo de versionamento.

---

## Estrutura de Pastas

```
spoti-fly/
├── backend/            # API Node.js + Express
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── config/
│   │   ├── database/
│   │   └── index.js
├── frontend/           # Aplicação React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
├── docker/             # Arquivos de configuração do Docker
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
├── docs/               # Documentação técnica
│   ├── README.md
│   ├── mapeamento-rotas-spotifly.md
│   ├── cronograma.md
│   └── estrutura.md
└── README.md           # Apresentação do projeto (raiz)
```

---

## Fluxo de Versionamento com Gitflow

| Tipo de branch     | Padrão                  | Uso |
|--------------------|-------------------------|-----|
| `main`             | `main`                  | Versão final |
| `develop`          | `develop`               | Integração de funcionalidades |
| `feature/*`        | `feature/playlist-crud` | Funcionalidades novas |
| `bugfix/*`         | `bugfix/login-error`    | Correções |
| `hotfix/*`         | `hotfix/producao`       | Urgências em produção |

---

## Regras

- Toda feature nova nasce a partir de `develop`
- Merge para `main` só após validação e revisão
- Commits com padrão semântico: `feat:`, `fix:`, `docs:`, `test:`, etc.
