<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
=======
# ProjetinhoReact
>>>>>>> 39217e7bd918bc4d8a18457d81e61dc872307dc5
>>>>>
>>>>> BANCO DE DADOS
CREATE DATABASE CurrilosLink;
USE CurrilosLink;
 
CREATE TABLE usuario(
id INT AUTO_INCREMENT,
nome VARCHAR(299) NOT NULL,
idade INT NOT NULL,
cpf INT NOT NULL UNIQUE,
dataNascimento DATETIME NOT NULL,
Telefone INT NOT NULL UNIQUE,
unidadeFederativa VARCHAR(19) CHECK (unidadeFederativa IN ('Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins')),
cidade VARCHAR(299) NOT NULL 
);

CREATE TABLE infoUsuario (
Situação VARCHAR(299) NOT NULL,
LinguagemProgramação VARCHAR(299),
habilidades VARCHAR(299) NOT NULL
);



SELECT * FROM usuario;
SELECT * FROM infoUsuario;
