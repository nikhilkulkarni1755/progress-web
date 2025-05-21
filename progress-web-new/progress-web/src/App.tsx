import './App.css'

function App() {
  return (
    <div className="w-screen flex flex-col min-h-screen bg-gray-400">
      {/* Header */}
      <header className="w-[90%] flex justify-between items-center py-24 px-6 pr-24 bg-gray-600 text-black shadow rounded-r-[2vw] max-w-full">

        {/* hook and stuff */}
        <div className="flex flex-col items-start max-w-[50%] text-left">
          <p className="text-5xl font-bold text-gray-200 leading-tight">
            Build better habits with
          </p>
          <p 
          className="text-7xl font-extrabold italic text-[#DFF6FF] leading-[1.4] bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg,rgba(223, 246, 255, 1) 0%, rgba(255, 223, 246, 1) 50%, rgba(246, 255, 223, 1) 100%)",
          }}>
            The Progress App
          </p>

          <p className="text-lg text-gray-200 leading-tight">
            text here
          </p>
        </div>

        {/* phone image */}
        <div className="max-w-[45%]">
          <img
            src="src/assets/phone.png"
            alt="App Preview"
            className="w-[280px] h-auto"
          />
        </div>
      </header>

      {/* Body */}
      <main className="w-full px-[10%] grid grid-cols-3 gap-6 px-6 py-12 bg-green">
        {/* Review Section */}
        <div className="bg-gray-100 p-6 rounded shadow min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">Review</h2>
          {/* Content */}
          <p className="text-base">Add review content here...</p>
        </div>

        {/* App Screenshot */}
        <div className="flex justify-center items-center">
          <img
            src="/app-screenshot.png"
            alt="App Screenshot"
            className="max-h-[600px] max-w-full object-contain rounded shadow"
          />
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-100 p-6 rounded shadow min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          {/* Content */}
          <p className="text-base">Add FAQ content here...</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full grid grid-cols-2 gap-6 bg-blue-100 px-6 py-12 text-center">
        <div className="download">
          <p className="text-2xl font-medium mb-2">Download the App</p>
          {/* Download links or buttons */}
        </div>
        <div className="contactUs">
          <p className="text-2xl font-medium mb-2">Contact Us</p>
          {/* Contact form or email */}
        </div>
      </footer>
    </div>
  )
}

export default App
