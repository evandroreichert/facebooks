const { getData } = require('../services/testService')

const getTest = (req, res) => {
    const data = getData()
    res.json({ message: 'deu boa padrin', data })
}

module.exports = { getTest }
