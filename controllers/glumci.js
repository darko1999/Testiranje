const sviGlumci = require("../data/glumci.json");
const Glumac = require("../models/glumac");

const vratiSveGlumce = async (req, res, next) => {
  res.status(200);
  res.send({ glumci: sviGlumci });
};

const vratiGlumcaPoImenuIPrezimenu = async (req, res, next) => {
  const glumac = sviGlumci.find(
    (glumac) => glumac.id === parseInt(req.params.id)
  );
  if (!glumac) {
    res.status(404).send({ err: "Nepoznat glumac" });
  } else {
    res.status(200).send({ glumac });
  }
};

const vratiGodineGlumca = async (req, res, next) => {
  const glumac = sviGlumci.find(
    (glumac) => glumac.id === parseInt(req.params.id)
  );
  if (!glumac) {
    res.status(404).send({ err: "Nepoznat glumac" });
  } else {
    const godine = { Ime: glumac.name, Godine: glumac.age };
    res.status(200).send({ godine });
  }
};

const vratiRejtingGlumca = async (req, res, next) => {
  const glumac = sviGlumci.find(
    (glumac) => glumac.id === parseInt(req.params.id)
  );
  if (!glumac) {
    res.status(404).send({ err: "Nepoznat glumac" });
  } else {
    const rejting = { Ime: glumac.name, Rejting: glumac.rating };
    res.status(200).send({ rejting });
  }
};

module.exports = {
  vratiSveGlumce,
  vratiGlumcaPoImenuIPrezimenu,
  vratiGodineGlumca,
  vratiRejtingGlumca,
};
