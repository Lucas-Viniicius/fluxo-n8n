// O n8n recebe o JSON do fórum dentro de $json.body
const body = $json.body || $json;

const email = body.email || '';
const username = body.username || 'Usuario_Anonimo';

// Regra do domínio do desafio
const isEmpresaDomain = email.toLowerCase().endsWith('@empresa.com');

// Define a mensagem
let welcomeMessage = '';
if (isEmpresaDomain) {
  welcomeMessage = `Bem-vindo(a) ao time, @${username}!`;
} else {
  welcomeMessage = `Seja muito bem-vindo(a) à nossa comunidade, @${username}!`;
}

// Retorna o objeto na raiz para o nó do Monday ler sem dar 'undefined'
return {
  username: username,
  email: email,
  welcome_message: welcomeMessage
};