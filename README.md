# 🚀 Desafio Técnico – Automação com n8n

Bem-vindo! 👋

Este repositório foi criado para apresentar a solução desenvolvida para um **desafio técnico**, utilizando **n8n** para automatizar o processo de tratamento e integração de dados.

Aqui você encontrará toda a documentação necessária para compreender a automação, incluindo seu funcionamento, imagens do fluxo e uma breve explicação sobre cada etapa.

---

## 📂 Conteúdo do repositório

- 📄 Workflow exportado do n8n (`.json`);
- 🖼️ Imagens do fluxo da automação;
- 📝 Documentação explicando o funcionamento;
- 📖 Resumo do processo automatizado.

---

## ⚙️ Como a automação funciona

A automação é iniciada por meio de um **Webhook**, que recebe os dados enviados pelo sistema de origem.

Após o recebimento, o fluxo realiza o tratamento e a validação dessas informações, aplica as regras de negócio necessárias e identifica o perfil do usuário. Em seguida, é gerada a ação correspondente e os dados são registrados automaticamente em uma tabela no **Monday.com**, eliminando a necessidade de intervenção manual.

---

## 📸 Fluxo da automação

Nesta pasta também estão disponíveis imagens ilustrando o fluxo completo desenvolvido no n8n, facilitando a compreensão da lógica implementada e das integrações realizadas.

---

## 🛠️ Ferramentas e Tecnologias utilizadas

- **n8n**
- **Webhooks**
- **Monday.com**
- **Insomnia**
- **HTTP Request**
- **JavaScript (tratamento de dados)**
