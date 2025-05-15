import './App.css'

function App() {
  return (
    <div className="w-screen flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-20 px-6 pr-75 bg-[#dff6ff] text-black shadow rounded-r-[2vw]"
      style={{
        background: "linear-gradient(90deg,rgba(223, 246, 255, 1) 0%, rgba(255, 223, 246, 1) 50%, rgba(246, 255, 223, 1) 100%)",
      }}>
        <div className="flex items-center space-x-5">
          <h1 className="text-3xl font-bold">Build better habits with 
            <span className="text-[#4682B4] italic ml-3">The Progress App</span>
          </h1>
        </div>

        <img
              src="src\assets\phone.png"
              alt="App Logo"
              className="w-[200px] h-auto pr-*"
            />
      </header>

      {/* Body */}
      <main className="w-full grid grid-cols-3 gap-6 px-6 py-12 bg-white">
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
