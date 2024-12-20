import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route to serve React's index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 52505;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
