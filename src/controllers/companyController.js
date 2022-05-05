const { read } = require("../utils/FS");
const path = require("path");

const companyController = (req, res) => {
  const companies = read("company.json");
  res.render("index", { company: companies });
};

module.exports = companyController;
