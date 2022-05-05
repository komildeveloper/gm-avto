const { read } = require('../utils/FS')
const renderCompany = (req, res) => {
  const companies = read('company.json')
  
  res.render('index', { companies })
}

module.exports = renderCompany
