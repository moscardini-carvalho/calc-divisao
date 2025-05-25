module.exports = (req, res) => {
  const { a, b } = req.query;
  const divisor = parseFloat(b);

  if (divisor === 0) {
    return res.status(400).json({ erro: "Divisão por zero não permitida" });
  }

  const resultado = parseFloat(a) / divisor;
  res.json({ resultado });
};

