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

```mermaid
flowchart TD
    subgraph Frontend
      A[View<br/>(scanView.js)] --> B[Controller<br/>(scanController.js)]
      B --> C[Model JS<br/>(urlscanModel.js)]
      C -->|fetch POST /api/scan| D[Express Backend]
    end

    subgraph Backend
      D --> E[Controller Node<br/>(backend/controllers/scanController.js)]
      E --> F[Model Node<br/>(backend/models/urlscanModel.js)]
      F -->|axios POST /api/v1/scan & axios GET /api/v1/result/:uuid| G[urlscan.io API]
    end
```

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

1. **Submit Scan**
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
     "uuid": "68e26c59-...",
     "visibility": "public"
   }
   ```

2. **Get Result**
   `GET /api/v1/result/:uuid`

3. **Screenshot**
   `GET /screenshots/:uuid.png`

---

## 🔄 Dados Integrados Dinamicamente

A página recebe e exibe dinamicamente os seguintes dados da URL escaneada:

- **URL escaneada**
- **País de origem do IP**
- **Servidor web**
- **IP e ASN (Autonomous System Number)**
- **Print da página (screenshot)**
- **Link direto para resultado completo**

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

### 2. Instalar Dependências

```bash
cd backend
npm install
```

### 3. Configurar `.env`

Crie um arquivo `.env` dentro da pasta `backend/` com o seguinte conteúdo:

```env
URLSCAN_API_KEY=sua_api_key_aqui
```

> ⚠️ Sua chave deve estar **ativa** no painel do [urlscan.io](https://urlscan.io/user/api/)

### 4. Iniciar o Servidor

```bash
node backend/server.js
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Exemplo de Uso

Digite uma URL no campo "Escaneie uma URL" e clique em "Escanear". O sistema:

1. Submete a URL para análise via API;
2. Aguarda 10 segundos e inicia polling até obter o resultado;
3. Exibe as informações de rede, servidor, localização e print da página.

---

## 📄 Licença

Este projeto é acadêmico e foi desenvolvido para fins didáticos. Você pode adaptá-lo livremente para seus estudos.
