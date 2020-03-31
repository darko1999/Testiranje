const sviGlumci = require('../data/glumci.json')

const vratiSveGlumce = async (req, res, next) => {
  res.status(200)
  res.send({ glumci: sviGlumci })
}

const vratiGlumcaPoImenuIPrezimenu = async (req, res, next) => {
  const { imePrezime } = req.params
  const glumac = sviGlumci.filter(glumac => new RegExp(imePrezime, 'i').exec(glumac.name))
  if (glumac.length===0){
    res.status(200).send({err:"Doslo je do greske"})
  }else{
    res.status(200).send({glumac})
  }
  
}

const vratiGodineGlumca = async (req, res, next) => {
  const { imePrezime } = req.params
  const glumac = sviGlumci.filter(glumac => new RegExp(imePrezime, 'i').exec(glumac.name))
  if (glumac.length===0){
    res.status(200).send({err:"Doslo je do greske"})
  }else{
    const godine={"Ime":glumac[0].name,
                  "Godine":glumac[0].age}
    res.status(200).send({godine})
  }
}

const vratiRejtingGlumca = async (req, res, next) => {
  const { imePrezime } = req.params
  const glumac = sviGlumci.filter(glumac => new RegExp(imePrezime, 'i').exec(glumac.name))
  if (glumac.length===0){
    res.status(200).send({err:"Doslo je do greske"})
  }else{
    const rejting={"Ime":glumac[0].name,
                  "Godine":glumac[0].rating}
    res.status(200).send({rejting})
  }
}

module.exports = {
  vratiSveGlumce,
  vratiGlumcaPoImenuIPrezimenu,
  vratiGodineGlumca,
  vratiRejtingGlumca
}
