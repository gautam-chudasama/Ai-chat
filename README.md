# AI Chat Application

A real-time chat application powered by Google's Gemini AI, built with React frontend and Node.js backend using Socket.io for real-time communication.

## 🚀 Features

- **Real-time messaging** with Socket.io
- **AI-powered responses** using Google Gemini 2.5 Flash
- **Modern UI** with smooth animations and responsive design
- **Chat history** maintained during the session
- **Auto-scroll** to latest messages
- **Windows-inspired design** with clean aesthetics

## 🛠️ Tech Stack

### Frontend
- **React** 18+ with Vite
- **Socket.io Client** for real-time communication
- **CSS3** with custom styling and animations
- **ESLint** for code quality

### Backend
- **Node.js** with Express
- **Socket.io** for WebSocket connections
- **Google Generative AI** (Gemini 2.5 Flash)
- **dotenv** for environment variables

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google AI API key (Gemini)

## 🔧 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd chat-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Start the Backend Server
```bash
cd backend
npm start
```
The server will run on `http://localhost:3000`

### Start the Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
chat-app/
├── backend/
│   ├── src/
│   │   ├── app.js              # Express app setup
│   │   └── service/
│   │       └── service.ai.js   # Google AI service
│   ├── server.js               # Main server file with Socket.io
│   ├── .env                    # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Main React component
│   │   ├── App.css            # Styling
│   │   ├── main.jsx           # React entry point
│   │   └── index.css          # Global styles
│   ├── public/
│   ├── index.html
│   └── package.json
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file in the backend directory with:

```env
GOOGLE_AI_API_KEY=your_actual_api_key_here
```

## 🎨 Features in Detail

### Real-time Communication
- Uses Socket.io for bidirectional communication
- Messages are instantly delivered without page refresh
- Connection status handling

### AI Integration
- Powered by Google's Gemini 2.5 Flash model
- Maintains chat history for context-aware responses
- Handles AI service errors gracefully

### User Interface
- Clean, modern design inspired by Windows aesthetics
- Responsive layout that works on mobile and desktop
- Smooth animations and transitions
- Auto-scroll to latest messages
- Custom scrollbar styling

### Message Handling
- User messages appear on the right (blue)
- AI responses appear on the left (black)
- Proper message formatting and word wrapping
- Enter key support for sending messages

## 🔧 Configuration

### Changing AI Model
To use a different Gemini model, modify the model name in `backend/src/service/service.ai.js`:

```javascript
const response = await ai.models.generateContent({
  model: "gemini-2.5-flash", // Change this to your preferred model
  contents: chatHistory,
});
```

### Customizing UI
Main styling can be modified in `frontend/src/App.css`. Key CSS variables:

```css
:root {
  --accent: #0078d4;        /* Primary accent color */
  --bg: #f3f6f8;           /* Background color */
  --panel: #ffffff;        /* Panel/card background */
  --muted: #6b6b6b;        /* Muted text color */
  --radius: 12px;          /* Border radius */
  --shadow: 0 6px 18px rgba(16, 24, 40, 0.06); /* Box shadow */
}
```

## 🐛 Known Issues & Troubleshooting

### Backend Issues
- **AI Service Error**: Check if your Google AI API key is valid and has sufficient quota
- **Port Already in Use**: Make sure port 3000 is available or change it in `server.js`

### Frontend Issues
- **Connection Failed**: Ensure the backend is running on port 3000
- **CORS Errors**: Check CORS configuration in `server.js`

### Common Fixes
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📝 Development Scripts

### Backend
```bash
npm start          # Start the server
npm run dev        # Start with nodemon (if configured)
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google AI for the Gemini API
- Socket.io team for real-time communication
- React team for the awesome frontend framework
- Vite for the fast build tool

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Open an issue in the repository
3. Contact the maintainers

---

**Happy Chatting! 🎉**