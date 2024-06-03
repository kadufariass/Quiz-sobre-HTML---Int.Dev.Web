Kadu Farias

Sistemas de Informação

Introducão a Desenvolvimento Web

2 Turma

Trabalho Avaliativo 01
              

== Apresentação do Projeto: Quiz sobre HTML == 
 
Este projeto consiste em um quiz interativo sobre HTML de elementos  que foi estudado na 
aula, desenvolvido utilizando HTML, CSS e JavaScript.  
 
== Descrição do Projeto == 
 
O projeto é composto por duas páginas HTML principais: `index.html` e `quiz.html`. 
 
- O arquivo `index.html` serve como a página inicial do quiz, onde são apresentadas 
informações sobre o curso, aluno e disciplina, além de um botão para iniciar o quiz. 
 
- O arquivo `quiz.html` é onde o quiz é apresentado. Ele exibe cada pergunta do quiz, 
permitindo que o usuário selecione uma resposta para cada uma delas. Após responder todas 
as perguntas, o usuário pode ver seus resultados. 
 
O funcionamento do quiz é controlado pelo código JavaScript no arquivo `script.js`. Este código 
é responsável por exibir as perguntas, validar as respostas dos usuários, calcular os resultados e 
fornecer feedback sobre o desempenho do usuário. 
 
== Funcionalidades Principais == 
 
- Exibição de Perguntas: As perguntas são exibidas uma de cada vez, permitindo que o usuário 
selecione uma resposta. 
 
- Validação de Respostas: O código verifica se o usuário selecionou uma resposta antes de 
avançar para a próxima pergunta. 
 
- Cálculo de Resultados: Após responder todas as perguntas, o código calcula o número de 
respostas corretas e fornece um feedback com base no desempenho do usuário. 
 
== Estrutura de Arquivos == 
 
O projeto é organizado em três arquivos principais: 
 
1. `index.html`: Página inicial do quiz, contendo informações sobre o curso e um botão para 
iniciar o quiz. 
 
2. `quiz.html`: Página do quiz, onde as perguntas são exibidas e o usuário pode selecionar suas 
respostas. 
 
3. `script.js`: Código JavaScript responsável por controlar o funcionamento do quiz, incluindo a 
exibição de perguntas, validação de respostas e cálculo de resultados. 
 
Além disso, o projeto inclui um arquivo CSS (`style.css`) para estilizar a aparência do quiz e 
torná-lo mais atraente visualmente. 
 
== Conclusão == 
 
O projeto do quiz sobre motos é uma ótima maneira de testar e aprimorar o conhecimento 
sobre motocicletas, enquanto também oferece uma experiência interativa e divertida para os 
usuários. Esperamos que você aproveite o quiz e aprenda algo novo sobre o mundo das motos! 
 
 
== Explicação do Código HTML (index.html e quiz.html) == 
 
index.html: 
- Este é o arquivo HTML inicial que serve como página inicial do quiz. 
- Ele contém um título, informações sobre o curso, aluno e disciplina, e um botão para iniciar o 
quiz. 
- O botão está vinculado ao arquivo quiz.html. 
 
quiz.html: 
- Este arquivo HTML é onde o quiz é apresentado. 
- Ele inclui um título, um contêiner para as perguntas do quiz, um botão "Próxima" e um 
contêiner para os resultados do quiz. 
- Um script JavaScript é incluído no final do arquivo usando a tag <script> com o atributo defer 
para garantir que o script seja carregado após o conteúdo da página. 
 
== Explicação do Código JavaScript (script.js) == 
 
- Este arquivo JavaScript controla o funcionamento do quiz. 
- Ele começa adicionando um ouvinte de evento para esperar o carregamento completo do 
DOM antes de iniciar a execução do código. 
- Em seguida, define as perguntas do quiz, cada uma com uma pergunta, opções de resposta e 
a resposta correta. 
- O código então define funções para mostrar perguntas, mostrar resultados, destacar 
respostas corretas/incorretas e avançar para a próxima pergunta. 
- Quando o usuário clica no botão "Próxima", a função nextQuestion() é chamada para validar a 
resposta do usuário, destacar as respostas corretas/incorretas e avançar para a próxima 
pergunta ou mostrar os resultados finais. 
 
== Explicação do Código CSS (style.css) == 
 
- Este arquivo CSS é responsável pelo estilo visual do quiz. 
- Ele define estilos para o corpo da página, contêineres, títulos, perguntas, opções de resposta, 
botões e contêiner de resultados. 
- Os estilos incluem formatação de texto, cores de fundo, margens, preenchimento, sombras e 
efeitos de transição para hover. 
- Também há estilos para destacar respostas corretas/incorretas. 
 
 
== Explicação do Código JavaScript (script.js) == 
 
1. Evento de Carregamento do DOM: 
- O código começa adicionando um ouvinte de evento para o evento 'DOMContentLoaded', 
que é acionado quando o DOM (Document Object Model) da página é completamente 
carregado. 
 
2. Obtenção de Elementos do DOM: 
- Dentro do evento de carregamento do DOM, são obtidas referências para os elementos HTML 
relevantes usando os métodos getElementById e querySelector. 
 
3. Definição das Questões do Quiz: 
- O código define um array chamado 'questions' que armazena as perguntas do quiz, cada uma 
com suas opções de resposta e a resposta correta. 
 
4. Variáveis de Controle: 
- São declaradas duas variáveis globais: 'currentQuestionIndex' para rastrear o índice da 
pergunta atual e 'userAnswers' para armazenar as respostas do usuário. 
 
5. Função para Mostrar Perguntas (showQuestion): 
- A função 'showQuestion' é definida para exibir a próxima pergunta do quiz. 
- Ela constrói dinamicamente o HTML para exibir a pergunta atual e suas opções de resposta, 
utilizando um loop for...in para iterar sobre as opções de resposta. 
 
6. Função para Mostrar Resultados (showResults): 
- A função 'showResults' é responsável por calcular e exibir os resultados finais do quiz. 
- Ela verifica as respostas do usuário, calcula o número de respostas corretas e fornece um 
feedback com base na pontuação alcançada. 
 
7. Função para Destacar Respostas (highlightAnswers): 
- A função 'highlightAnswers' destaca visualmente as respostas corretas/incorretas do usuário 
após selecionar uma opção. 
- Ela também armazena a resposta do usuário e avança para a próxima pergunta. 
 
8. Função para a Próxima Pergunta (nextQuestion): 
- A função 'nextQuestion' é chamada quando o usuário clica no botão de próxima pergunta. 
- Ela valida se o usuário selecionou uma resposta e, em seguida, destaca as respostas 
corretas/incorretas e avança para a próxima pergunta ou exibe os resultados finais. 
 
9. Ouvinte de Evento para o Botão de Próxima Pergunta: 
- Um ouvinte de evento é adicionado ao botão de próxima pergunta para chamar a função 
'nextQuestion' quando o botão é clicado. 
 
10. Exibição da Primeira Pergunta: 
- Após a definição de todas as funções, a função 'showQuestion' é chamada para exibir a 
primeira pergunta quando o DOM é carregado. 
