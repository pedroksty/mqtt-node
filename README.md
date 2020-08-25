<h1 align="center">
    <img alt="mqtt-node" title="mqtt-node" src="./assets/banner.png" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedroksty/mqtt-node?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pedroksty/mqtt-node">

  <a href="https://www.twitter.com/pedroksty/">
    <img alt="Siga no Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fpedroksty%2Fnlw1">
  </a>
	
  
  <a href="https://github.com/pedroksty/mqtt-node/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pedroksty/mqtt-node">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/pedroksty/mqtt-node/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pedroksty/mqtt-node?style=social">
  </a>
</p>

## 💻 Sobre o projeto

Maneira fácil e rápida para criar um servidor MQTT local, publishers, e subscribers

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [Mosca][mosca]
- [MQTT][mqtt]

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Yarn][yarn].
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/pedroksty/mqtt-node.git

# Acesse a pasta do projeto no terminal/cmd
$ cd mqtt-node

# Instale as dependências
$ yarn

# Coloque o Ip da sua máquina na váriavel myIp em server.ts

# Abra o primeiro terminal aonde o servidor executara
$ yarn dev:broker
# Um log como ira aparecer: Servidor rodando na porta 1883

# Abra o segundo terminal aonde o publisher executara
$ yarn dev:publisher
# A cada 2 segundo o publisher ira enviar uma messagem com 's' na rota 'URA/robo1/acao', para alterar a mensagem e a rota é só mudar as informações em src/mqtt/publisher

# Abra o terceiro terminal aonde o subscriber executara
$ yarn dev:subscriber
# Ele ficara ouvindo a rota 'URA/robo1/acao' e enviar um log da mensagem dessa rota, para alterar a rota é só mudar as informações em src/mqtt/subscriber
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Pedro henrique 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pedro-henrique-b9541a199/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
[yarn]: https://yarnpkg.com/getting-started/install
[mosca]: https://github.com/moscajs/mosca
[mqtt]: http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html
