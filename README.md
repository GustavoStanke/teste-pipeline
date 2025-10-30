# Projeto Node.js simples para pipeline

Este repositório contém um projeto Node.js mínimo para você testar pipelines de CI/CD.

## Como rodar localmente

- Requisitos: Node.js 16 ou superior
- Instalar dependências: não há dependências

Comandos:

- `npm start` — inicia um servidor HTTP simples em `http://localhost:3000`
- `npm test` — roda testes básicos (sem frameworks)

## Estrutura

- `src/app.js` — funções simples usadas nos testes
- `src/server.js` — servidor HTTP básico
- `test/test.js` — testes usando `assert`

## Exemplos de pipeline

Incluímos arquivos de exemplo para três plataformas comuns:

- GitHub Actions: `.github/workflows/ci.yml`
- Azure Pipelines: `azure-pipelines.yml`
- GitLab CI: `.gitlab-ci.yml`

Ajuste conforme necessário para seu ambiente.

## Próximos passos

- Suba este repositório para seu provedor (GitHub, Azure Repos, GitLab)
- Ative o pipeline correspondente
- Confirme que o job executa `npm test` com sucesso

