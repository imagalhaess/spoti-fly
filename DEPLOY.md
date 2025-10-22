# 🚀 Guia de Deploy - Spotifly

## Estratégia: Frontend + Backend Separados

**Frontend** → Vercel (Grátis)  
**Backend** → Render.com (Grátis)  
**Banco de Dados** → Neon.tech (Grátis)

---

## 📦 Passo 1: Deploy do Frontend (Vercel)

### 1.1 No Vercel Dashboard:

1. Acesse: https://vercel.com
2. Faça login com GitHub
3. **"Add New Project"**
4. Selecione: `spoti-fly`

### 1.2 Configurações Importantes:

Nas configurações do projeto, defina:

**Framework Preset:** `Vite`  
**Root Directory:** `frontend`  
**Build Command:** `npm run build`  
**Output Directory:** `dist`

### 1.3 Variáveis de Ambiente:

Por enquanto, deixe vazio. Vamos configurar depois que o backend estiver no ar.

### 1.4 Deploy!

Clique em **"Deploy"** e aguarde.

✅ Seu frontend estará em: `https://spoti-fly-xxx.vercel.app`

---

## 🔧 Passo 2: Deploy do Backend (Render.com)

### 2.1 Configurar Banco de Dados (Neon.tech)

1. Acesse: https://neon.tech
2. Faça login com GitHub
3. **"Create Project"**
4. Copie a **Connection String**:
   ```
   postgresql://user:pass@host.neon.tech/neondb
   ```

### 2.2 Deploy no Render.com

1. Acesse: https://render.com
2. Faça login com GitHub
3. **"New +"** → **"Web Service"**
4. Conecte seu repositório: `spoti-fly`

### 2.3 Configurações do Backend:

**Name:** `spoti-fly-backend`  
**Root Directory:** `backend`  
**Environment:** `Node`  
**Build Command:** `npm install`  
**Start Command:** `npm start`

### 2.4 Variáveis de Ambiente no Render:

Adicione estas variáveis:

| Nome | Valor |
|------|-------|
| `DATABASE_URL` | Sua connection string do Neon |
| `JWT_SECRET` | `KLt84mc9NdoDgsWjao7zE4Wpz4usGDwq` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |

### 2.5 Deploy!

Clique em **"Create Web Service"**

✅ Seu backend estará em: `https://spoti-fly-backend-xxx.onrender.com`

---

## 🔗 Passo 3: Conectar Frontend ao Backend

### 3.1 No Vercel (Frontend):

1. Vá em **Settings** → **Environment Variables**
2. Adicione:

   **Name:** `VITE_API_URL`  
   **Value:** `https://spoti-fly-backend-xxx.onrender.com/api`

3. Clique em **Save**

### 3.2 Fazer Redeploy:

1. Vá em **Deployments**
2. Clique nos 3 pontinhos do último deploy
3. **"Redeploy"**

---

## ✅ Verificar se está Funcionando

1. Acesse seu frontend: `https://spoti-fly-xxx.vercel.app`
2. Tente fazer login ou criar uma conta
3. Se funcionar, está tudo certo! 🎉

---

## 🐛 Troubleshooting

### Erro 404 no Vercel
**Solução:** Verifique se o Root Directory está como `frontend`

### Erro de CORS
**Solução:** No backend, configure CORS para aceitar o domínio do Vercel:
```javascript
// backend/src/server.js
app.use(cors({
  origin: 'https://spoti-fly-xxx.vercel.app'
}));
```

### Backend não conecta ao banco
**Solução:** Verifique se a `DATABASE_URL` está correta no Render

---

## 📊 Custos

| Serviço | Plano Grátis | Limite |
|---------|--------------|--------|
| **Vercel** | ✅ Grátis | 100GB banda/mês |
| **Render** | ✅ Grátis | 750h/mês |
| **Neon** | ✅ Grátis | 0.5GB storage |

**Total: R$ 0,00/mês** 💰

---

## 🔄 Atualizações Futuras

Sempre que você der push no GitHub:
- ✅ Frontend faz redeploy automático (Vercel)
- ✅ Backend faz redeploy automático (Render)

```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

---

## 📝 URLs Finais

Anote seus endereços:

```
Frontend: https://spoti-fly-xxx.vercel.app
Backend:  https://spoti-fly-backend-xxx.onrender.com
Banco:    Neon.tech Dashboard
```

🎉 **Seu app está no ar!**
