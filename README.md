#school

Passos iniciais para o projeto:
* instalar o angular/cli
    npm install -g @angular/cli

* Caso o computador não reconheça o ng, utilizar o comando set path:
  set path=%PATH%;C:\Users\Aluno\AppData\Roaming\npm

Iniciando o projeto angular:
* Comando para criar um novo projeto:
  ng new Calcv3 --no-standalone

  	 Do you want to enable Server-Side Rendering (SSR) and Static
Site Generation (SSG/Prerendering)? 
    RESPOSTA: NO

* Comando para criar um novo componente:
  ng g c nomeConteiner

* Comando para abrir a aplicação no  localHost:
  ng s -o

* Comando para instalar o bootstrap
  ng add @ng-bootstrap/ng-bootstrap

*************************************

para startar a aplicação:
  json-server data.json


utilização de endpoit

criando serviço:
ng g s student

configura o serviço em student.service.ts -> criação do end-point

quem usa o serviço -> students.componente
    injeta o serviço





