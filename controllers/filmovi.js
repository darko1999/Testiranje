const sviFilmovi = require('../data/filmovi.json')

const vratiSveFilmove = async (req, res, next) => {
  res.status(200)
  res.send({ filmovi: sviFilmovi })
}

const vratiFilmovePoNazivu = async (req, res, next) => {
  const film = sviFilmovi.find(film=>film.id===parseInt(req.params.id))
  if (!film){
    res.status(404).send({err:"Film ne postoji"})
  }else{
    res.status(200).send({film})
  }
}

const vratiOpisFilma = async (req, res, next) => {
  const film = sviFilmovi.find(film =>film.id===parseInt(req.params.id))
  if (!film){
    res.status(404).send({err:"Film ne postoji"})
  }else{
    const plot={"Film":film.title,
                "Opis":film.plot}
  res.status(200).send({plot})
  }
}

module.exports = { vratiSveFilmove, vratiFilmovePoNazivu, vratiOpisFilma }
