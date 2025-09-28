export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">5Xcodes</h1>
        <p className="text-xl mb-8">Accelerate Your Digital Future 5X Faster</p>
        <div className="space-y-4">
          <p className="text-lg">🚀 Premium Software Development</p>
          <p className="text-lg">⚡ Custom Solutions</p>
          <p className="text-lg">🎯 AI Integration</p>
          <p className="text-lg">☁️ Cloud Solutions</p>
        </div>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
