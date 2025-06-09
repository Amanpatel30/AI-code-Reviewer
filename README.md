# 💻 AI Code Reviewer

![GitHub stars](https://img.shields.io/github/stars/yourusername/AI-code-Reviewer?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/AI-code-Reviewer?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/AI-code-Reviewer?style=social)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Code Reviewer Logo" width="300"/>
</p>

> 🧠 Enhance your code quality with AI-powered code reviews, suggestions, and automated improvements.

## ⭐ Features

- 🔬 **Code Analysis**: Get detailed insights into your code quality, potential bugs, and improvement areas
- 🔄 **Multi-AI Integration**: Choose between Google Gemini, Deepseek AI, and more for your code reviews
- 📊 **Diagram Generation**: Generate diagrams and visual representations of your code
- 🎨 **Syntax Highlighting**: Beautiful code display with Prism.js
- 📱 **Responsive Design**: Works smoothly on both desktop and mobile devices
- ⚡ **Real-time Processing**: Instant AI analysis as you type or upload code

## 🔧 Tech Stack

### Frontend
- ⚛️ React 19 with Vite
- 🎨 TailwindCSS for styling
- 📝 React Markdown & Prism.js for code display
- 🌐 Axios for API communication

### Backend
- 🖥️ Node.js with Express 5
- 🤖 Google Gemini AI
- 🔮 Deepseek AI
- 🖼️ Hugging Face for image generation
- 🔐 dotenv for environment variable management

## 📋 Prerequisites

- 📦 Node.js 18+
- 📦 npm or yarn
- 🔑 API keys for:
  - Google Gemini AI
  - Deepseek AI
  - Hugging Face (optional, for image generation)

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/AI-code-Reviewer.git
cd AI-code-Reviewer
```

### Backend Setup

```bash
cd Backend
npm install

# Create a .env file with your API keys
echo "GEMINI_API_KEY=your_gemini_api_key
DEEPSEEK_API_KEY=your_deepseek_api_key
HUGGINGFACE_API_KEY=your_huggingface_api_key" > .env

# Start the backend server
npm start
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The app will be running at http://localhost:5173

## 🖼️ Screenshots

<p align="center">
  <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AI Code Reviewer Dashboard" width="700"/>
</p>

<p align="center">
  <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Code Review Example" width="700"/>
</p>

## 📝 Usage

1. 📄 Paste your code into the editor or upload a file
2. 🤖 Select your preferred AI engine (Gemini, Deepseek)
3. 🔍 Click "Review Code" to get AI-powered suggestions
4. 📊 Explore the detailed analysis and recommendations
5. 📈 Generate visual representations with the "Generate Diagram" feature

## ⚙️ Workflow

```mermaid
graph TD
    A[Input Code] --> B[Select AI Engine]
    B --> C[Request Analysis]
    C --> D[Backend Processing]
    D --> E[AI API Call]
    E --> F[Process Response]
    F --> G[Display Results]
    G --> H[User Reviews Suggestions]
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [Google Gemini AI](https://ai.google.dev/)
- [Deepseek AI](https://www.deepseek.com/)
- [Hugging Face](https://huggingface.co/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)

---

<p align="center">
  Made with ❤️ by Your Name
</p>
