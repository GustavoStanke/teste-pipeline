// Testes simples sem dependências externas
const assert = require('assert');
const { soma, saudacao } = require('../src/app');

try {
  // Teste de soma
  assert.strictEqual(soma(2, 3), 5, 'soma(2,3) deve ser 5');
  assert.strictEqual(soma(-1, 1), 0, 'soma(-1,1) deve ser 0');

  // Teste de saudação
  assert.strictEqual(saudacao('Pipeline'), 'Olá, Pipeline!', 'saudação deve retornar mensagem correta');

  console.log('✔ Todos os testes passaram');
  process.exit(0);
} catch (err) {
  console.error('✖ Teste falhou:', err.message);
  process.exit(1);
}

