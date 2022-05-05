const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const read = file => {
	return JSON.parse(
		readFileSync(join(__dirname, `../model/${file}`), {
			encoding: 'utf8',
			flag: 'r'
		})
	)
}

const write = (file, data) => {
	writeFileSync(
		join(__dirname, `../model/${file}`),
		JSON.stringify(data, null, 2),
		err => {
			if (err) throw err
			return 'OK'
		}
	)
}

module.exports = {
	read,
	write
}
