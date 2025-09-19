# 🌳 Hierarchical Visualization

This project demonstrates **Hierarchical Data Visualization** (tree structures like org charts) using **MongoDB, Express, and D3.js**.

---

## 📖 Overview

Hierarchical visualization is used to represent **parent-child relationships** in data where information is **nested (tree-like structure)**.

Examples include:

- **Organization chart** (CEO → Managers → Employees)  
- **Product categories** (Electronics → Mobiles → Accessories)  
- **File system** (Folder → Subfolders → Files)

Common chart types for hierarchical visualization are:

- Tree diagrams  
- Treemaps  
- Sunbursts  
- Icicle Charts  
- Circle Packing  

---

## 🚀 Features

- MongoDB backend to store hierarchical data.  
- Express.js server to serve both the API and frontend.  
- D3.js frontend to render an interactive **Tree Diagram**.  
- Example dataset: CEO → CTO, CFO, COO → Subordinates.  

---

## 📂 Project Structure

- **server.js** → Express backend, MongoDB connection, API endpoint `/api/org`, and static file serving.  
- **seed.js** → Script to insert sample hierarchical organization data into MongoDB.  
- **public/tree.html** → Frontend visualization that fetches org data and renders with D3.js.  
- **package.json** → Node.js dependencies and project metadata.  

---

## ⚙️ Setup and Installation

### 1. Clone Repository

```bash
git clone https://github.com/sai2k23/Hierarchical-Visualization.git
cd Hierarchical-Visualization
2. Install Dependencies
bash
Copy code
npm install
3. Start MongoDB
Ensure MongoDB is running locally at:

arduino
Copy code
mongodb://localhost:27017
The default database name used is visualization.

4. Seed Database
Run the seed script to populate the org chart data:

bash
Copy code
node seed.js
This will insert a sample CEO → CTO/CFO/COO hierarchy into MongoDB.

5. Run Server
Start the Express server:

bash
Copy code
node server.js
Then open in browser:
http://localhost:3000/tree.html

📊 Sample Data
The following nested JSON is seeded into MongoDB:

json
Copy code
{
  "name": "CEO",
  "children": [
    {
      "name": "CTO",
      "children": [
        {
          "name": "Dev Manager",
          "children": [
            { "name": "Developer 1" },
            { "name": "Developer 2" }
          ]
        },
        { "name": "QA Manager" }
      ]
    },
    {
      "name": "CFO",
      "children": [
        { "name": "Accountant 1" },
        { "name": "Accountant 2" }
      ]
    },
    {
      "name": "COO",
      "children": [
        { "name": "Operations 1" }
      ]
    }
  ]
}
📸 Output
Org Chart rendered in browser using D3.js.

Displays CEO at root node with child nodes.

(Insert screenshot here)

📝 Learnings
Connected MongoDB with Express using Mongoose.

Seeded hierarchical (nested) JSON into MongoDB.

Served data through an API and visualized with D3.js.

Learned difference between temporal (time-based) vs hierarchical (nested) visualization.