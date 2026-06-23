#  Fintech Expenses API

##  Desafio Técnico — Gestão Financeira Corporativa

Backend desenvolvido com **NestJS + TypeScript + Prisma + PostgreSQL**, focado em uma API modular para controle financeiro por usuário.

---

##  Objetivo

Permitir que usuários:

- Registrem entradas e saídas financeiras
- Organizem transações por categoria
- Consultem movimentações
- Garantam isolamento de dados por usuário

---

##  Decisões Técnicas

### Backend
- NestJS com arquitetura modular
- Prisma ORM para acesso ao banco
- PostgreSQL como banco relacional
- DTOs com validação (em evolução)
- Separação por domínio (Auth, Categories, Transactions)

### Observação
Projeto focado em simplicidade e clareza, sem over-engineering (DDD, CQRS ou microsserviços não utilizados conforme o desafio).

---

##  Stack

- NestJS
- TypeScript (strict mode)
- Prisma ORM 6.19.3
- PostgreSQL 16.14
- JWT (em implementação futura)

---

##  Banco de Dados

- PostgreSQL 16.14
- Prisma ORM para migrations e queries

---
##  Instalação

```bash
npm install
```
##  Migrations (Prisma)
```bash
npx prisma migrate dev
npx prisma generate
```
##  Variáveis de ambiente 
```env
DATABASE_URL="postgresql://user:password@localhost:5432/fintech_expenses_db"
```
##  Usuário de teste 

Email: wuelber.r2@gmail.com  
Senha: @GRa3x57$1



##  Módulos

### Auth
- Registro de usuário
- Login

### Categories
- CRUD de categorias por usuário

### Transactions
- CRUD de transações
- Filtros por usuário

---

##  Modelo de Dados

### User
- id, name, email, password, createdAt

### Category
- id, name, description, userId, createdAt

### Transaction
- id, title, amount, type, categoryId, userId, createdAt

---

## ️ Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

---

##  Endpoints

###  Auth
- POST /auth/register
- POST /auth/login

---

### Categories
- POST /categories
- GET /categories/:userId
- GET /categories/:userId/:id
- PUT /categories/:userId/:id
- DELETE /categories/:userId/:id

---

###  Transactions
- POST /transactions
- GET /transactions/:userId
- GET /transactions/:userId/:id
- PUT /transactions/:userId/:id
- DELETE /transactions/:userId/:id

---


### Rodando o projeto
```
npm run start:dev
```
### Deploy
API está rodando em produção no Railway:
```
https://fintech-expenses-challenge-production-7aef.up.railway.app
```
##  Status do Projeto
O projeto está em desenvolvimento ativo. Abaixo o status das funcionalidades baseadas no escopo do desafio:

- [x] Autenticação (Login/Registro)
- [x] CRUD de Categorias
- [x] CRUD de Transações (Create/Read)
- [x] Deploy em ambiente de produção (Railway)
- [ ] Dashboard com indicadores calculados na API
- [ ] Filtros avançados e paginação
- [ ] Testes automatizados (Unitários/E2E)
- [ ] Interface React (Pendente)
- [ ] Refatoração da segurança (Migração para AuthGuard JWT)rança (Migração para AuthGuard JWT)


## transacao:
https://fintech-expenses-challenge-production-7aef.up.railway.app/transactions/cab6e453-a690-450c-aee3-84c85e981d39

## consultar caterogoria
https://fintech-expenses-challenge-production-7aef.up.railway.app/categories/cab6e453-a690-450c-aee3-84c85e981d39






