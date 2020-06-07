<h1 align="center">
	<img alt="Logo" title="#logo" width="100%" src="https://github.com/Ariosmaia/nlw-01/blob/master/.github/capa.JPG">
</h1>

<p align="center">
	<a href="https://pt-br.reactjs.org/">
		<img src="https://img.shields.io/static/v1?label=react&message=front-end&color=61DAFB&style=flat&logo=REACT" />	
	</a>
	<a href="https://reactnative.dev/">
		<img src="https://img.shields.io/static/v1?label=react-native&message=mobile&color=61DAFB&style=flat&logo=REACT" />
	</a>
	<a href="https://nodejs.org/en/">
		<img src="https://img.shields.io/static/v1?label=node%20js&message=back-end&color=76d04b&style=flat&logo=node.js" />
	</a>
	<a href="https://www.typescriptlang.org/">
		<img src="https://img.shields.io/static/v1?label=typescript&message=Language&color=007acc&style=flat&logo=TypeScript" />
	</a>
	<br/>
	<a href="https://rocketseat.com.br/">
		<img src="https://img.shields.io/static/v1?label=made%20by&message=rocketseat&color=7159c1&style=for-the-badge"/>	
	</a>
	<br/>
	<a>
		<img alt="GitHub" src="https://img.shields.io/github/license/ariosmaia/nlw-01">
	</a>
</p>

> Status do Projeto: Concluido :heavy_check_mark:

### Tópicos
- [Descrição do projeto](#clipboard-descrição-do-projeto)
- [Pré-requisitos](#point_right-pré-requisitos)
- [Libs instaladas](#open_file_folder-libs-instaladas)
- [Como rodar a aplicacão](#arrow_forward-como-rodar-a-aplicacão)
- [Database](#floppy_disk-database)
- [Licença](#memo-licença)


## :clipboard: Descrição do projeto

O projeto <strong>Ecoleta</strong> é uma aplicação Web e Mobile para ajudar as pessoas a encontrarem pontos de coleta para reciclagem.

Aplicação foi desenvolvida na <strong>Next Level Week</strong> na trila <strong>Booster</strong> e distribuída pela :rocket: [Rocketseat](https://rocketseat.com.br/).
A ideia de desenvolver esta aplicação surgiu por causa da <strong>semana do meio ambiente</strong>, mesma semana que foi ministrado os cursos da <strong>NLW</strong>.

## :point_right: Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#windows-stable) 


## :open_file_folder: Libs Instaladas
- [Back-end](https://github.com/Ariosmaia/nlw-01/blob/master/server/README-PACKAGES.md)
- [Front-end](https://github.com/Ariosmaia/nlw-01/blob/master/web/README-PACKAGES.md)
- [Mobile](https://github.com/Ariosmaia/nlw-01/blob/master/mobile/README-PACKAGES.md)

## :arrow_forward: Como rodar a aplicacão
No terminal, clone o projeto:
```
git clone https://github.com/Ariosmaia/nlw-01.git
```

Entre na pasta de cada projeto:

<br/>

 :gear: <strong>Back-end</strong>
 
```
cd server
```
   - Instale as dependencias:
```
npm install
```
  - Execute a aplicação
```
npm run dev
```
<br/>

 :computer:<strong>Web</strong>
	
```
cd web
```
   - Instale as dependencias:
```
yarn
```
  - Execute a aplicação
```
yarn start
```
<br/>

 :iphone: <strong>Mobile</strong>
	
 > :exclamation: Para rodar a aplicação mobile é necessário ter o expo instaldo globalmente:
 > [Ver documentação](https://docs.expo.io/)
 >
 > ```
 > npm install expo-cli --global
 > ```
 
```
cd mobile
```
   - Instale as dependencias:
```
yarn
```
  - Execute a aplicação
```
yarn start
```

#### :floppy_disk: Database
 - Banco de dados SQLite
 - Rodar as migratios para gerar o bando de dados automatocamente:
 ```
 npm run knex:migrate
 ```
 - Popular bando de dados com dados iniciais:
 ```
 knex:seed
 ```
 
 ## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
