const express = require("express");
const router = express.Router();

router.get("/feed", async (req, res) => {
  try {
    const { source } = req.query;
    if (source === "invitation") {
      res.json([
        {
          title: "Lesson Pack invite",
          coaches: ["Coach 1", "Coach 2"],
          status: "lesson",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
        {
          title: "Program invite",
          coaches: ["Coach 1", "Coach 2"],
          status: "program",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
        {
          title: "Summer event",
          coaches: ["Coach 1", "Coach 2"],
          status: "misc",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
        {
          title: "After hours practice",
          coaches: ["Coach 1", "Coach 2"],
          status: "misc",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
      ]);
    } else if (source === "activity") {
      res.json([
        {
          title: "Club Swing",
          coaches: ["Coach 1", "Coach 2"],
          status: "activity",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
        {
          title: "Summer event",
          coaches: ["Coach 1", "Coach 2"],
          status: "activity",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
        {
          title: "Club swing",
          coaches: ["Coach 1", "Coach 2"],
          status: "activity",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
        {
          title: "Club swing",
          coaches: ["Coach 1", "Coach 2"],
          status: "activity",
          timeStart: "10 Apr 2024 02:00 PM",
          timeEnd: "10 Apr 2024 05:00 PM",
          location: "2 PARK ROAD, GRAFTON, AUCKLAND, NEW ZEALAND",
        },
      ]);
    } else {
      res.status(500).json("Incorrect source");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

router.get("/profile", async (req, res) => {
  try {
    res.json({
      firstName: "John",
      lastName: "Smith",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

router.get("/map-ui", async (req, res) => {
  try {
    res.json([
      { icon: 2, label: "Putting" },
      { icon: 2, label: "Back" },
      { icon: 2, label: "Performance" },
      { icon: 2, label: "Left swing" },
      { icon: 2, label: "Putting" },
      { icon: 2, label: "Putting" },
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
