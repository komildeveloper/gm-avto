const express = require('express')
const router = express.Router()
const { renderCompany } = require('../controllers/companyController')

router.get('/company', renderCompany)

module.exports = router

