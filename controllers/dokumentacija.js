const dokumentacija = require('../data/dokumentacija.json')
const vratiDokumentaciju = async (req, res, next) => {
    res.status(200)
    res.send({ Dokumentacija: dokumentacija })
  }

  module.exports={vratiDokumentaciju}