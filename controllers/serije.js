const sveSerije = require('../data/serije.json')
const vratiSveSerije = async (req, res, next) => {
  res.status(200)
  res.send({ serije: sveSerije })
}

const vratiSerijuPoNazivu = async (req, res, next) => {
  const serija = sveSerije.find(serija =>serija.id===parseInt(req.params.id))
  if (!serija){
    res.status(404).send({err:"Serija ne postoji"})
  }else{
    res.status(200).send({serija})
  }
}

const vratiOpisSerije = async (req, res, next) => {
  const serija = sveSerije.find(serija =>serija.id===parseInt(req.params.id))
  if (!serija){
    res.status(404).send({err:"Serija ne postoji"})
  }else{
    const plot={"Ime":serija.title,
                "Opis":serija.plot}
    res.status(200).send({plot})
  }
}

const vratiEpizodeSerije = async (req, res, next) => {
  const serija = sveSerije.find(serija =>serija.id===parseInt(req.params.id))
  if (!serija){
    res.status(404).send({err:"Serija ne postoji"})
  }else{
    const epizode={"Ime":serija.title,
                  "Epizode":serija.episodes}
    res.status(200).send({epizode})
  }
}

module.exports = {
  vratiSveSerije,
  vratiSerijuPoNazivu,
  vratiOpisSerije,
  vratiEpizodeSerije
}
