
# Teste Front-End Jr | Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-End Jr na Econverse.

O objetivo é reproduzir a página Home disponibilizada no Figma, utilizando React, TypeScript e Sass, com vitrines de produtos alimentadas por dados JSON e um modal interativo para visualização das informações de cada produto.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- HTML5 semântico
- CSS3 (Flexbox, Grid e Media Queries)
- Fetch API
- Git e GitHub

## Funcionalidades

- Página Home baseada no layout do Figma
- Cabeçalho com navegação e barra de pesquisa
- Banner principal e categorias de produtos
- Vitrines com carrosséis horizontais
- Carregamento de produtos a partir de JSON
- Modal com informações do produto selecionado
- Banners de parceiros
- Seção de navegação por marcas
- Newsletter demonstrativa com validação de campos
- Rodapé institucional com redes sociais
- Layout adaptável para diferentes tamanhos de tela

## Como executar o projeto

### Pré-requisitos

Para executar a aplicação, é necessário ter instalado:

- Node.js compatível com a versão do Vite utilizada
- npm
- Git (para clonar o repositório)

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Santos-Jeferson/teste-front-end.git
```

Acesse a pasta da aplicação:

```bash
cd teste-front-end/frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite no terminal.

## Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza a versão de produção |
| `npm run lint` | Executa a análise estática com ESLint |

## Dados dos produtos

Os dados são carregados a partir do arquivo JSON disponibilizado para o teste técnico da Econverse.

O arquivo está localizado em:

`frontend/public/data/products.json`

O carregamento é realizado utilizando a Fetch API, com tratamento para estados de carregamento e possíveis erros.

Cada produto apresenta as seguintes informações:

- Nome
- Imagem
- Descrição resumida
- Preço

Ao clicar em **COMPRAR**, é exibido um modal contendo as principais informações do produto selecionado.

## Organização do projeto

```text
frontend/
├── public/
│   ├── assets/
│   └── data/
│       └── products.json
├── src/
│   ├── components/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

A aplicação foi organizada em componentes reutilizáveis, buscando facilitar a manutenção, a leitura e a evolução do código.

## Validação e testes

Foram utilizadas as ferramentas de análise e compilação disponíveis no projeto:

- ESLint para verificação estática do código
- TypeScript para verificação de tipos
- Vite para geração da versão de produção

O projeto foi compilado com sucesso utilizando `npm run build`, e a análise com `npm run lint` foi concluída sem erros.

## Observações técnicas

- O projeto foi desenvolvido sem bibliotecas prontas de interface, como Bootstrap ou Material UI.
- O formulário de newsletter é demonstrativo e não realiza cadastros em um serviço externo.
- Alguns elementos visuais não possuem navegação externa, pois seus destinos não foram fornecidos no desafio.
- Ferramentas de IA também foram utilizadas como apoio na revisão do código, identificação de erros e avaliação de ajustes técnicos.

## Autor

**Jeferson Oliveira dos Santos**

GitHub: https://github.com/Santos-Jeferson
