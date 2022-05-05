const { read, write } = require('../utils/FS')

const postCompany = (req, res) => {
  const { name, director_name } = req.body

  const readCompany = read('company.json').find(e => e.name == name && e.director_name == director_name)
  console.log(readCompany)

  readCompany.push({ id: readCompany[readCompany.length -1]?.id + 1 || 1 ,name, director_name })
  write('company.json', readCompany)
}

module.exports = postCompany
