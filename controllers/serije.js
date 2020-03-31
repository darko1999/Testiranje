const sveSerije = require('../data/serije.json')
const vratiSveSerije = async (req, res, next) => {
  res.status(200)
  res.send({ serije: sveSerije })
}

const vratiSerijuPoNazivu = async (req, res, next) => {
  const { naziv } = req.params
  const serija = sveSerije.filter(serija => new RegExp(naziv, 'i').exec(serija.title))
  if (serija.length===0){
    res.status(200).send({err:"Doslo je do greske"})
  }else{
    res.status(200).send({serija})
  }
}

const vratiOpisSerije = async (req, res, next) => {
  const { naziv } = req.params
  const serija = sveSerije.filter(serija => new RegExp(naziv, 'i').exec(serija.title))
  if (serija.length===0){
    res.status(200).send({err:"Doslo je do greske"})
  }else{
    const plot={"Ime":serija[0].title,
                "Opis":serija[0].plot}
    res.status(200).send({plot})
  }
}

const vratiEpizodeSerije = async (req, res, next) => {
  const { naziv } = req.params
  const serija = sveSerije.filter(serija => new RegExp(naziv, 'i').exec(serija.title))
  if (serija.length===0){
    res.status(200).send({err:"Doslo je do greske"})
  }else{
    const epizode={"Ime":serija[0].title,
                  "Epizode":serija[0].episodes}
    res.status(200).send({epizode})
  }
}

module.exports = {
  vratiSveSerije,
  vratiSerijuPoNazivu,
  vratiOpisSerije,
  vratiEpizodeSerije
}
