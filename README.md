# Checkout - Painel Administrativo

API Back-end para gerenciamento de produtos de um painel administrativo, desenvolvida com Node.js, TypeScript, Express, Prisma e PostgreSQL.

O projeto foi criado com foco no estudo e aplicação de conceitos de desenvolvimento Back-end, organização em camadas, criação de APIs REST, validação de dados e relacionamento entre entidades no banco de dados.

## Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Yup
- CORS
- dotenv
- Git e GitHub

## Funcionalidades

Atualmente, a API possui funcionalidades para gerenciamento de:

### Produtos

- Cadastro de produtos
- Listagem de produtos ativos
- Edição de produtos
- Desativação de produtos
- Cadastro de variantes
- Edição de variantes
- Desativação de variantes
- Associação de valores de atributos às variantes

### Atributos

- Cadastro de atributos
- Listagem de atributos
- Edição de atributos
- Desativação de atributos
- Cadastro de valores para atributos
- Edição de valores
- Desativação de valores

### Categorias

- Listagem de categorias

## Modelagem do banco de dados

A aplicação utiliza PostgreSQL com Prisma ORM.

Atualmente, o banco possui as seguintes entidades:

- `Categorias`
- `Produtos`
- `Variantes`
- `Atributos`
- `ValoresAtributos`
- `VariantesValores`

A modelagem permite que um produto pertença a uma categoria e possua diversas variantes.

As variantes podem ser associadas a diferentes valores de atributos, permitindo representar características como tamanho, cor ou outras propriedades de um produto.

## Estrutura do projeto

```text
prisma/
├── migrations/
└── schema.prisma

src/
├── controllers/
│   └── schemas/
├── factories/
├── generated/
│   └── prisma/
├── models/
├── repositories/
├── routes/
├── services/
└── server.ts