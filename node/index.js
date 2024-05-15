const express = require('express')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')
const jwt = require('jsonwebtoken')

let normalizePort = require('normalize-port')

let port = normalizePort(process.env.PORT || 4000)

const app = express()
app.use(bodyParser.json())

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Path to Firebase service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com' // Your Firebase project URL
})

// Endpoint for user authentication
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Authenticate user with Firebase Authentication
    const userCredential = await admin.auth().signInWithEmailAndPassword(username, password);
    const user = userCredential.user;       

    // Generate JWT token
    const token = jwt.sign({ uid: user.uid }, 'your_secret_key', { expiresIn: '1h' });

    // Send token as response
    res.json({ token });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(401).json({ message: 'Login failed' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
