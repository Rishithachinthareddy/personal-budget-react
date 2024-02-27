const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs'); 
const cors = require('cors');

app.use(cors());

const budget = {
    myBudget: [
        {
        "title": "Eat out",
        "budget": 100
        },
        {
        "title": "Rent",
        "budget": 130
        },
        {
        "title": "Grocery",
        "budget": 60
        },
        {
        "title": "stationery",
        "budget": 40
        },
        {
        "title": "traveling",
        "budget": 30
        },
        {
        "title": "Communication",
        "budget": 80
        },
        {
        "title": "Vacation",
        "budget": 40
        }
    ]
  };

app.get('/budget', (req, res) => {
  res.json(budget);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
