'use strict';

var utils = require('../utils/writer.js');
var APICanaisDeAtendimento = require('../service/APICanaisDeAtendimentoService');

module.exports.getBranches = function getBranches (req, res, next, page, pageSize) {
  APICanaisDeAtendimento.getBranches(page, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getElectronicChannels = function getElectronicChannels (req, res, next, page, pageSize) {
  APICanaisDeAtendimento.getElectronicChannels(page, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPhoneChannels = function getPhoneChannels (req, res, next, page, pageSize) {
  APICanaisDeAtendimento.getPhoneChannels(page, pageSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
