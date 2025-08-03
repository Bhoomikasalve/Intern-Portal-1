const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Root route (to prevent "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Intern Portal Backend is Running');
});

// Dummy intern data
app.get("/api/intern", (req, res) => {
  res.json({
    name: "Alice Johnson",
    referralCode: "alice2025",
    donationsRaised: 1200,
  });
});

// Dummy leaderboard data
app.get("/api/leaderboard", (req, res) => {
  res.json([
    { name: "Alice Johnson", donations: 1200 },
    { name: "Bob Smith", donations: 950 },
    { name: "Carol Lee", donations: 800 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
