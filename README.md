# AUS: Assistente Universal de Saúde

![image](https://user-images.githubusercontent.com/42685889/132728989-0ee4cc19-300d-4565-a1ba-8a6f41db351a.png)

O Assistente Universal de Saúde é um aplicativo do governo que integrará os dados sanitários de todos os habitantes de Technópolis para dinamizar o acompanhamento, o tratamento e a prevenção de doenças. Por meio de sua interface interativa e integração com o Sistema Único de Saúde, o AUS centralizará todas as informações clínicas de pacientes do país inteiro, facilitando o monitorameto da saúde de cada um e o compartilhamento de informações essenciais em casos de emergência médica. Além de atuar como forma de dinamização e universalização dos sistemas públicos de saúde, o AUS será um grande agente de educação e conscientização, colocando o usuário no centro do processo medicinal a partir da plataforma de Saúde Interativa e das informações personalizadas sobre Medicina Preventiva e Saúde Mental.

## Tecnologias
 

Com o objetivo de criar uma aplicação de ponta e altamente escalável, o aplicativo do AUS utiliza as seguintes técnologias:
- [Typescript](https://www.typescriptlang.org/)
  - O Typescript é um "Superset" do Javascript (ou como dizem: Javascript em esteróides). Com ele, podemos criar aplicações altamente tipaveis e robustas, melhorando, assim, a experiência de desenvolvimento e a manutenção do código 
- [NextJS](https://nextjs.org/) 
  - O NextJs é um framework de produção para ReactJS nos permite criar aplicações utilizando a tecnologia de "Server-Side Rendering" e hospedar "Serverless Functions" em servidores da [AWS](https://aws.amazon.com/pt/) de alta performace. Dessa forma, podemos entregar aos nossos usuários a melhor experiência possível. 
- [ReactJS](https://pt-br.reactjs.org/)
  - O ReactJs é um framework de desenvolvimento web que nos permite criar aplicações performáticas e de forma declarativa.
- [TailwindCSS](https://tailwindcss.com/)
  - O TailwindCSS é um framework de classes de utilidade CSS. Com ele, podemos estilizar nossa aplicação de forma simples, porém altamente customizavel. 
- Azure Health Bot
  - O Azure Health Bot é uma IA de NLP (Natural Language Processing) que nos permite realizar uma comunicação com humano e máquina. O AUS utiliza essa ferramenta para a Assistente Virtual.

<div align="center">
  <img style="width: 200px; height: 200px" src="https://raw.githubusercontent.com/igniteram/Cliptor.js/HEAD/images/typescript.png" />
  <img style="width: 200px; height: 200px" src="https://ih1.redbubble.net/image.983299034.4034/st,small,507x507-pad,600x600,f8f8f8.jpg" />
  <img style="width: 200px; height: 200px" src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?fit=260%2C260&ssl=1" />
  <img style="width: 200px; height: 200px" src="https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg" />
</div>

### Caveats da versão demo

1 - A nossa versão demo não utiliza nenhum tipo de armazenamento de dados (bancos de dados). No entanto, é possível implementar de forma simples e eficiente a utilização desse tipo de serviço, devido à alta maleabilidade e escalabilidade da nossa aplicação

Algumas possíveis soluções para a implementação de um banco de dados:
- [Prisma.io](https://www.prisma.io/) (TypeORM para SQL e NoSQL)
- [MongoDB](https://www.mongodb.com/) (Solução Cloud com bibliotecas em JS)

## Funcionalidades

### Assistente Virtual
A Assistente Virtual, SUSana, é uma ferramenta que permite o usuário realizar consultas quando e onde quiser, seja pelo nosso aplicativo ou pelo Telegram, e receber um breve diagnóstico e ações recomendadas para tratar o problema.

### Ficha Médica
  - Condições médicas
    - Doenças diagnosticadas
    - Predisposições
    - Condições psiquiátricas
    - Alergias e reações
  - Histórico
    - Medicamentos
    - Cirurgias
    - Exames
  - Dados do paciente
    - Fixos
      - Tipo sanguíneo
      - Sexo
      - Tipo de pele Fitzpatrick
    - Variáveis
      - Peso
      - Altura
      - Gordura corporal
      - Grau (visão)
- Integração com dispositivos inteligentes
  - SmartWatch
  - Smart Shoes
  - Fitbit (Pulseiras)
  - Balança de Bioimpedância
  - Medidor de glicose
  - Medidor de pressão
  - Oximetro
  - Termômetro
  - Aparelhos de academia
- Integração com o SUS
  - Plataforma do médico
