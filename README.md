🤖** AI Chatbot with Pinecone + OpenAI (RAG System)**

A smart AI chatbot built using Node.js, OpenAI embeddings, and Pinecone vector database.
It uses a Retrieval-Augmented Generation (RAG) approach to answer questions based on custom data.

🌿** Features**
📄 custom .txt data
🧠 Convert text into embeddings using OpenAI
📦 Store embeddings in Pinecone vector DB
🔍 Semantic search using user queries
🤖 AI-generated responses using OpenAI GPT models
🧩 Modular backend architecture (controllers, services, utils)

🏗️** Tech Stack**
Node.js
Express.js
OpenAI API (Embeddings + Chat Completions)
Pinecone Vector Database
JavaScript (ES Modules)

**📁 Project Structure**
**src/**
│
├── config/
│ ├── openai.js
│ └── pinconeapi.js
│
├── controllers/
│ ├── chatController.js
│ └── adminController.js
│
├── services/
│ ├── embeddingServices.js
│ ├── openaiServices.js
│ └── pineconeService.js
│
├── utils/
│ └── searchContext.js
│
├── routes/
│ ├── adminRoutes.js
│ └── chatRoutes.js
│
├── data/
│ ├── about.txt
│ └── skills.txt
│
└── scripts/ (optional used for testing purpose only)
└── uploadData.js

**⚙️ How It Works (RAG Flow)**
User Question
↓
Generate Embedding (OpenAI)
↓
Search Similar Vectors (Pinecone)
↓
Retrieve Relevant Context
↓
Send Context + Question to GPT
↓
AI Response

**⚡ Performance Notes**
Embeddings are generated using OpenAI API
Pinecone handles fast semantic search
Response time: ~2–4 seconds (normal RAG behavior)

**🧠 Key Concepts Used**
Embeddings (vector representation of text)
Semantic Search
Vector Database (Pinecone)
RAG Architecture

**🤍 Author**

Kinza AI-Focused MERN Stack Developer
