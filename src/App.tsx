import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">DeepSeek Clone</h1>
          <p className="text-xl text-gray-400">Welcome to the AI Assistant</p>
        </div>
      </div>
      <Analytics />
    </>
  )
}

export default App
