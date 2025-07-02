# Projeto 3 - Conscientização e Escaneamento de URLs

Este projeto consiste em uma página de conscientização sobre ataques cibernéticos, com a funcionalidade adicional de escanear URLs usando a API do urlscan.io. A aplicação foi organizada seguindo boas práticas de estrutura e arquitetura MVC.

---

## 📁 Estrutura de Pastas

```plaintext
PROJETO 3/
├── backend/
│   ├── controllers/
│   │   └── scanController.js
│   ├── models/
│   │   └── urlscanModel.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── controllers/
    │   │   └── scanController.js
    │   ├── models/
    │   │   └── urlscanModel.js
    │   ├── views/
    │   │   └── scanView.js
    │   ├── app.js
    │   └── script.js
    └── index.html
```

---

## 🏗️ Arquitetura Adotada (MVC Simplificado)

- **Model (Frontend)**: faz chamadas `fetch` ao nosso backend.
- **Controller (Frontend)**: gerencia envio, polling e tratamento de erros.
- **View (Frontend)**: monta e atualiza o DOM com resultados.
- **Express Server (Backend)**: roteia `/api/scan` e `/api/result/:uuid`, serve o frontend.
- **Controller (Backend)**: recebe requests do frontend e chama o Model Node.
- **Model (Backend)**: usa `axios` para comunicar-se com a API externa.

---

## 🌐 API Utilizada

**urlscan.io API**

- **Base URL**: `https://urlscan.io/api/v1`
- **Autenticação**: cabeçalho `API-Key: SUA_CHAVE_AQUI`

### Endpoints

1. **Submit Scan**\
   `POST /api/v1/scan`

   ```http
   Content-Type: application/json
   API-Key: SUA_CHAVE_AQUI
   ```

   **Body**:

   ```json
   {
     "url": "https://example.com",
     "visibility": "public"
   }
   ```

   **Response (200)**:

   ```json
   {
     "uuid": "68e26c59-...","visibility": "public

   ```
