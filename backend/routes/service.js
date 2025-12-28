const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

router.post('/add', async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: "name and description are required" });
    }

    const service = await Service.create({
      name,
      description,
    });

    res.status(201).json({ success: true, service });
  } catch (error) {
    console.error("Create Service Error:", error);
    res.status(500).json({ error: "Failed to create service" });
  }
});

// Get notifications for a user
router.get("/getservice", async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({ success: true, services });
  } catch (error) {
    console.error("Get Services Error:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

module.exports = router;
