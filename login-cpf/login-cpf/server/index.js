import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  dateStrings: true,
});

function isValidCpf(value) {
  const cpf = String(value).replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  const calc = (len) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(cpf[i]) * (len + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return calc(9) === Number(cpf[9]) && calc(10) === Number(cpf[10]);
}

function isValidDate(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(`${s}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s
    && s >= "1900-01-01" && s <= new Date().toISOString().slice(0, 10);
}

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") ?? false }));
app.use(express.json({ limit: "10kb" }));

app.post(
  "/api/login",
  rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: true, legacyHeaders: false }),
  async (req, res) => {
    const { nome, cpf, nascimento } = req.body ?? {};
    const nomeLimpo = typeof nome === "string" ? nome.trim().replace(/\s+/g, " ") : "";
    const cpfLimpo = typeof cpf === "string" ? cpf.replace(/\D/g, "") : "";

    if (nomeLimpo.split(" ").length < 2 || nomeLimpo.length > 150)
      return res.status(400).json({ error: "Informe nome e sobrenome válidos." });
    if (!isValidCpf(cpfLimpo)) return res.status(400).json({ error: "CPF inválido." });
    if (typeof nascimento !== "string" || !isValidDate(nascimento))
      return res.status(400).json({ error: "Data de nascimento inválida." });

    try {
      const [rows] = await pool.execute(
        "SELECT nascimento FROM usuarios WHERE cpf = ?", [cpfLimpo]
      );

      if (rows.length === 0) {
        await pool.execute(
          "INSERT INTO usuarios (nome, cpf, nascimento) VALUES (?, ?, ?)",
          [nomeLimpo, cpfLimpo, nascimento]
        );
        return res.status(201).json({ message: "Cadastro realizado e acesso liberado." });
      }

      if (rows[0].nascimento !== nascimento)
        return res.status(401).json({ error: "Os dados informados não conferem." });

      await pool.execute(
        "UPDATE usuarios SET nome = ?, ultimo_acesso = CURRENT_TIMESTAMP WHERE cpf = ?",
        [nomeLimpo, cpfLimpo]
      );
      return res.json({ message: "Acesso liberado." });
    } catch (err) {
      console.error("Erro no login:", err.code ?? err.message);
      return res.status(500).json({ error: "Erro interno. Tente novamente em instantes." });
    }
  }
);

app.get("/api/health", (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 3001);
app.listen(port, () => console.log(`API em http://localhost:${port}`));
