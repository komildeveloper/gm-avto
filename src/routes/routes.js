const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companyController");

router.get("/company", companyController);

module.exports = router;

