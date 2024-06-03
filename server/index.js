const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
