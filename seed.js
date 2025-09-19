// seed.js
const mongoose = require('mongoose');

// Local Mongo connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/visualization';

const OrgSchema = new mongoose.Schema({}, { strict: false });
const OrgChart = mongoose.model('OrgChart', OrgSchema);

const sample = {
  name: "CEO",
  children: [
    {
      name: "CTO",
      children: [
        {
          name: "Dev Manager",
          children: [
            { name: "Developer 1" },
            { name: "Developer 2" }
          ]
        },
        { name: "QA Manager" }
      ]
    },
    {
      name: "CFO",
      children: [
        { name: "Accountant 1" },
        { name: "Accountant 2" }
      ]
    },
    {
      name: "COO",
      children: [
        { name: "Operations 1" }
      ]
    }
  ]
};

(async function() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB for seeding');

    // Clear old data
    await OrgChart.deleteMany({});
    const doc = new OrgChart(sample);
    await doc.save();

    console.log('🌱 Seeded org data successfully');
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
})();
