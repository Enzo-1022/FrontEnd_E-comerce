## VISÃO GERAL DO PROJETO
Esse é um projeto frontend que estou fazendo juntamente com o aprendizado do nextjs com react e typescript.
O objetvo do projeto é ser o frontend de um ecomerce de peças automotivas.
A ideia é ser bem simples, com operações basicas de inserção, atualização, visualisação e exclusão de produtos, sistema de login e cadastro para os usuários, painel para os administradores, sistema de carrinho + simulação de compra e integração com o backend que também está sendo desenvolvido por mim.

## FERRAMENTAS
```text
NextJS
React
TypeScript
```

## PRÉ REQUISITOS E AMBIENTES
#### NodeJS >= 22.19.0
#### NPM >= 10.9.3

## PASSO A PASSO PARA A EXECUÇÂO DO PROJETO 
### 1. Clonar o Repositório 
```text
git clone https://github.com/Enzo-1022/FrontEnd_E-comerce
```

### 2. Entrar na Pasta do Projeto
```text
cd FrontEnd_E-comerce
```

### 3. Instalar as Dependencias 
```text
npm install
```

## Comandos de Script Disponiveis
```text
npm run dev             # Inicia a aplicação em ambiente de desenvolvimento
npm run dev_https       # Inicia a aplicação em ambiente de desenvolvimento mas dessa vez com o uso do protocolo https
npm run lint            # Executa a Verificação do ESLint para identificar erros de sintaxe e padrão
npm run build           # Compila a aplicação para produção
npm run start           # Inicia a aplicação em modo de produção após o build
```

## Estrutura de Pastas do Projeto 

A aplicação segue uma arquitetura baseada em **Features (Dominios)** e **Camadas de Responsabilidades**, separando toda a lógica da aplicação do roteamento do Next.js

```text
src/
├── app/                  # Roteamento e layouts (App Router do Next.js)
├── components/           # Componentes visuais globais (Design System/UI Pura)
│   ├── ui/               # Botões, inputs, modais (agnósticos de regra de negócio)
│   └── layout/           # Header, Sidebar, Footer
├── contexts/             # Providers e gerenciamento de estado global
├── features/             # Módulos da aplicação organizados por funcionalidade
│   └── usuarios/         # Exemplo de feature/domínio
│       ├── components/   # Componentes exclusivos do domínio
│       ├── hooks/        # Hooks locais do domínio
│       ├── services/     # Chamadas de API/serviços do domínio
│       └── types/        # Interfaces e tipos específicos do domínio
├── hooks/                # Hooks utilitários globais
├── services/             # Clientes de API e instâncias globais
├── types/                # Entidades e tipos TypeScript globais
└── utils/                # Funções utilitárias puras (formatações, validações)
```