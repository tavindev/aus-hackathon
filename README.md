# AUS: Assistente Universal de Saúde

![image](https://user-images.githubusercontent.com/42685889/132728989-0ee4cc19-300d-4565-a1ba-8a6f41db351a.png)

O Assistente Universal de Saúde é um aplicativo do governo que integrará os dados sanitários de todos os habitantes de Technópolis para dinamizar o acompanhamento, o tratamento e a prevenção de doenças. Por meio de sua interface interativa e integração com o Sistema Único de Saúde, o AUS centralizará todas as informações clínicas de pacientes do país inteiro, facilitando o monitorameto da saúde de cada um e o compartilhamento de informações essenciais em casos de emergência médica. Além de atuar como forma de dinamização e universalização dos sistemas públicos de saúde, o AUS será um grande agente de educação e conscientização, colocando o usuário no centro do processo medicinal a partir da plataforma de Saúde Interativa e das informações personalizadas sobre Medicina Preventiva e Saúde Mental.

## Tecnologias

Com o objetivo de criar uma aplicação de ponta e altamente escalável, o aplicativo do AUS utiliza as seguintes técnologias:
- [Typescript](https://www.typescriptlang.org/)
  - O Typescript é um "Superset" do Javascript (ou como dizem: Javascript em esteróides). Com ele, podemos criar aplicações altamente tipaveis e robustas, melhorando, assim, a experiência de desenvolvimento e a manutenção do código 
- [NextJS](https://nextjs.org/) 
  - O NextJs nos permite criar aplicações utilizando a tecnologia de "Server-Side Rendering" e hospedar "Serverless Functions" em servidores da [AWS](https://aws.amazon.com/pt/) de alta performace. Dessa forma, podemos entregar aos nossos usuários a melhor experiência possível. 
- [ReactJS](https://pt-br.reactjs.org/)
  - O ReactJs é um framework de desenvolvimento web que nos permite criar aplicações performáticas e de forma declarativa.
- [TailwindCSS](https://tailwindcss.com/)
  - O TailwindCSS é um framework de classes de utilidade CSS. Com ele, podemos estilizar nossa aplicação de forma simples, porém altamente customizavel. 

### Caveats da versão demo

1 - A nossa versão demo não utiliza nenhum tipo de armazenamento de dados (bancos de dados) por questões demonstrativas. No entanto, é possível implementar de forma simples e eficiente a utilização desse tipo de serviço, devido à alta maleabilidade e escalabilidade da nossa aplicação

Algumas possíveis soluções para a implementação de um banco de dados:
- [Prisma](https://www.prisma.io/) (TypeORM para SQL e NoSQL)
- [MongoDB](https://www.mongodb.com/) (Solução Cloud com bibliotecas em JS)

2 - Por questões de tempo, não desenvolvemos nossa aplicação com a metodologia de "mobile-first". Porém futuras atualizações tornarão o aplicativo AUS "mobile friendly"

## Funcionalidades

- Ficha Médica
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
