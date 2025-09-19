// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Use local MongoDB
const MONGO_URI = 'mongodb://127.0.0.1:27017/visualization';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log('✅ MongoDB connected (local)'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});

// Flexible schema so we can insert any nested object
const OrgSchema = new mongoose.Schema({}, { strict: false });
const OrgChart = mongoose.model('OrgChart', OrgSchema);

// API: fetch first org chart document
app.get('/api/org', async (req, res) => {
  try {
    const doc = await OrgChart.findOne().lean();
    if (!doc) {
      return res.status(404).json({ message: 'No org data found. Run seed.js first' });
    }
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
