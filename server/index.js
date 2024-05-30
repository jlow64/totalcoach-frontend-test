const express = require("express");
const cors = require("cors");

const app = express(cors);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
