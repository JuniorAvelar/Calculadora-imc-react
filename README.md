# 🚀 Calculadora de IMC com React

Desenvolvi uma Calculadora de IMC utilizando React.js para reforçar meus conhecimentos em componentização, manipulação de estado e validação de formulários. O objetivo do projeto foi criar uma aplicação interativa e intuitiva para que os usuários possam calcular seu Índice de Massa Corporal (IMC) de forma simples e rápida.
 
# Funcionalidades Implementadas
✅ Entrada de dados com validação:
Os campos de altura e peso aceitam apenas números e vírgulas, impedindo a entrada de caracteres inválidos.

✅ Cálculo automático do IMC:
Após inserir os valores, o botão "Calcular" processa o IMC e exibe a classificação correspondente (exemplo: Normal, Sobrepeso, Obesidade).

✅ Classificação do IMC baseada em dados predefinidos:
O IMC calculado é comparado com um banco de dados (array de objetos) que define os intervalos e categorias.

✅ Botão para resetar o formulário:
Além de calcular, o usuário pode limpar os campos e redefinir os valores com um clique.

✅ Interface responsiva e organizada:
A aplicação foi estilizada com CSS puro para garantir um design limpo e agradável.

# 🛠 Tecnologias utilizadas

🔹 React.js – Para a estrutura e reatividade do app.
🔹 useState – Para gerenciar os estados do formulário e do resultado.
🔹 Componentização – Para manter o código modular e reutilizável.
🔹 CSS – Para estilização da interface.

# 📌 O que aprendi com este projeto?
🚀 Manipulação de estado no React:
Utilização do useState para armazenar os valores de altura, peso e resultado do IMC.
Atualização dinâmica da interface conforme o usuário digita.

🚀 Validação de formulários em React:
Uso de regex (replace(/[^0-9,]/g, "")) para permitir apenas números e vírgulas nos inputs.
Verificação de campos vazios antes de calcular o IMC.

🚀 Componentização e reuso de código:
Criação de um componente de botão reutilizável (Button.js).
Separação das lógicas de cálculo (ImcCalc.js) e exibição do resultado (ImcTable.js).

🚀 Manipulação de eventos:
Uso do onChange para capturar os valores digitados.
Implementação do onClick nos botões de calcular e limpar o formulário.

🚀 Lógica de comparação de dados:
Iteração sobre um array (data.forEach(item => {...}) para verificar em qual faixa de IMC o usuário se encontra.