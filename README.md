## VISÃO GERAL DO PROJETO
Esse é um projeto frontend que estou fazendo juntamente com o aprendizado do nextjs com react e typescript.
O objetvo do projeto é ser o frontend de um ecomerce de peças automotivas.
A ideia é ser bem simples, com operações basicas de inserção, atualização, visualisação e exclusão de produtos, sistema de login e cadastro para os usuários, painel para os administradores, sistema de carrinho + simulação de compra e integração com o backend que também está sendo desenvolvido por mim.

## FERAMENTAS
```text
    NextJS;
    React;
    TypeScript
```

## Comandos de Script Disponiveis
npm run dev     # Inicia a aplicação em ambiente de desenvolvimento

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