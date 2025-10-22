# 🚀 Guia de Deploy - Spotifly

## Deploy Completo no Vercel

### ⚠️ Importante: Banco de Dados

O Vercel não oferece banco de dados PostgreSQL gratuito. Você tem 2 opções:

#### **Opção A: Usar Vercel Postgres (Pago após trial)**
- 60 dias grátis
- Depois: $0.29/GB

#### **Opção B: Banco Externo Gratuito (Recomendado)**
Use um destes serviços gratuitos para PostgreSQL:
- **Neon.tech** ⭐ (Recomendado - 0.5GB grátis)
- **Supabase** (500MB grátis)
- **ElephantSQL** (20MB grátis)

---

## 📝 Passo a Passo Completo

### 1. Configurar Banco de Dados (Neon.tech)

1. Acesse: https://neon.tech
2. Crie uma conta (grátis)
3. Clique em "Create Project"
4. Copie a **Connection String** (algo como):
   ```
   postgresql://user:password@ep-cool-name.region.aws.neon.tech/neondb
   ```

### 2. Deploy no Vercel

1. **Acesse:** https://vercel.com
2. **Login com GitHub**
3. **"Add New Project"**
4. **Selecione:** `spoti-fly`
5. **Configure as Variáveis de Ambiente:**

   Clique em "Environment Variables" e adicione:

   ```
   DATABASE_URL = sua_connection_string_do_neon
   JWT_SECRET = KLt84mc9NdoDgsWjao7zE4Wpz4usGDwq
   NODE_ENV = production
   PORT = 5000
   ```

6. **Deploy!**

### 3. Configurar URLs

Após o deploy, o Vercel vai te dar um endereço:
```
https://spoti-fly-seuprojeto.vercel.app
```

**Atualize o frontend para usar esse endereço:**
- No Vercel, vá em Settings → Environment Variables
- Adicione:
  ```
  VITE_API_URL = https://spoti-fly-seuprojeto.vercel.app/api
  ```
- Faça um novo deploy

---

## 🎯 Comandos para Commit e Deploy

```bash
# 1. Adicionar arquivos
git add .

# 2. Commit
git commit -m "🚀 Configurar deploy no Vercel"

# 3. Push
git push origin main
```

O Vercel faz deploy automático após cada push! ✨

---

## ✅ Checklist Final

- [ ] Banco de dados criado no Neon.tech
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Primeiro deploy feito
- [ ] Frontend acessa o backend corretamente
- [ ] Teste: criar conta e fazer login

---

## 🐛 Troubleshooting

### Erro: "Cannot connect to database"
- Verifique se a `DATABASE_URL` está correta
- Confirme que o IP do Vercel está permitido no Neon.tech

### Erro: "404 Not Found" ao chamar API
- Verifique se `VITE_API_URL` está configurado
- Confirme que as rotas no `vercel.json` estão corretas

### Frontend não carrega
- Verifique se o build foi bem-sucedido
- Olhe os logs no Vercel Dashboard

---

## 🌐 URLs Importantes

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Neon Console:** https://console.neon.tech
- **GitHub Repo:** https://github.com/imagalhaess/spoti-fly

---

**Seu app ficará disponível em:**
```
Frontend: https://spoti-fly.vercel.app
Backend:  https://spoti-fly.vercel.app/api
```

🎉 **Pronto para o mundo!**

