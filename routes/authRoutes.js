const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Importe o modelo de usuário
const Company = require('../models/Company'); // Importe o modelo de empresa
const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  const { cpfOuCnpj, senha } = req.body;

  try {
    let user, isCompany;

    // Verificar se é um CNPJ ou CPF
    if (cpfOuCnpj.length === 14) { // CNPJ tem 14 dígitos
      user = await Company.findOne({ where: { CNPJ: cpfOuCnpj } });
      isCompany = true;
    } else if (cpfOuCnpj.length === 11) { // CPF tem 11 dígitos
      user = await User.findOne({ where: { cpf: cpfOuCnpj } });
      isCompany = false;
    } else {
      return res.status(400).json({ error: 'Formato de CNPJ ou CPF inválido' });
    }

    if (!user) {
      return res.status(404).json({ error: isCompany ? 'Empresa não encontrada' : 'Usuário não encontrado' });
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const tokenPayload = isCompany ? { companyId: user.id } : { userId: user.id };
    const token = jwt.sign(tokenPayload, 'seuSegredoAqui', { expiresIn: '1h' }); // Gere um token com um segredo

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});


// Rota de logout
router.post('/logout', (req, res) => {
  const { token } = req.body;

  try {
    // Aqui, você pode adicionar lógica para invalidar ou revogar o token, se necessário.
    // Isso pode envolver a criação de uma lista negra de tokens ou a definição de uma data de expiração curta para o token.
    
    // Por exemplo, você pode adicionar o token a uma lista negra para que ele não possa mais ser usado.
    // ListaNegra.adicionar(token);

    res.status(200).json({ message: 'Logout bem-sucedido' });
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    res.status(500).json({ error: 'Erro ao fazer logout' });
  }
});

module.exports = router;


module.exports = router;
