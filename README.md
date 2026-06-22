# Fintech Expenses API

##  Desafio Técnico — Gestão Financeira Corporativa

Backend desenvolvido em **NestJS + TypeScript + Prisma + PostgreSQL**, com foco em uma API modular para controle financeiro por usuário.

---

##  Objetivo

Construir uma API para gestão financeira corporativa onde cada usuário pode:

- Registrar entradas e saídas financeiras
- Organizar transações por categoria
- Filtrar e consultar movimentações
- Garantir isolamento de dados por usuário

---

##  Decisões Técnicas

###  Backend
- NestJS com arquitetura modular
- Prisma ORM para acesso ao banco
- PostgreSQL como banco relacional
- DTOs planejados para validação (em evolução)
- Estrutura separada por domínio (Auth, Categories, Transactions)

###  Observações
- Projeto focado em clareza e organização, sem over-engineering
- Sem uso de DDD, CQRS ou microsserviços (conforme instruções do desafio)

---

##  Stack

- NestJS
- TypeScript (strict mode)
- Prisma ORM 6.19.3
- PostgreSQL 16.14
- JWT (em Desenvolvimento)

---

##  Banco de Dados

### PostgreSQL
- Versão: 16.14

### Prisma
- ORM utilizado para migrations e queries

---

##  Módulos da API

###  Auth Module
- Registro de usuário
- Login (JWT em evolução)

---

###  Categories Module
- Criar categoria
- Listar categorias por usuário
- Relacionamento com usuário autenticado

---

###  Transactions Module
- Criar transação (entrada/saída)
- Listar transações por usuário
- Buscar por ID
- Atualizar transação
- Remover transação

---

##  Modelo de Dados

### User
- id
- name
- email
- password
- createdAt

---

### Category
- id
- name
- description
- userId
- createdAt

---

### Transaction
- id
- title
- amount
- type (INCOME | EXPENSE)
- categoryId
- userId
- createdAt

---

## ️ Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

---

## Configuração do ambiente

Criar arquivo `.env`:

```env id="env_senior"
DATABASE_URL="postgresql://user:password@localhost:5432/fintech_expenses_db"
JWT_SECRET="your_secret_key"