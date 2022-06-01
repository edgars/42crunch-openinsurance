'use strict';


/**
 * Dependências Próprias
 * Método para obter a listagem de dependências próprias da instituição.
 *
 * page Integer Número da página que está sendo requisitada (o valor da primeira página é 1). (optional)
 * pageSize Integer Quantidade total de registros por páginas. (optional)
 * returns ResponseBranchesList
 **/
exports.getBranches = function(page,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "meta" : {
      "totalRecords" : 1,
      "totalPages" : 1
    },
    "links" : {
      "next" : "next",
      "last" : "https://api.organizacao.com.br/open-insurance/channels/v1/<resource>",
      "prev" : "prev",
      "self" : "https://api.organizacao.com.br/open-insurance/channels/v1/<resource>",
      "first" : "https://api.organizacao.com.br/open-insurance/channels/v1/<resource>"
    },
    "brand" : {
      "companies" : [ {
        "name" : "Empresa A1",
        "cnpjNumber" : "45086338000178",
        "branches" : [ {
          "identification" : {
            "code" : "0001",
            "name" : "Marília",
            "type" : "POSTO_ATENDIMENTO",
            "checkDigit" : "9"
          },
          "postalAddress" : {
            "country" : "Brasil",
            "townName" : "São Paulo",
            "geographicCoordinates" : {
              "latitude" : "-90.8365180",
              "longitude" : "-180.836519"
            },
            "address" : "Av Naburo Ykesaki 1270, bloco 35, fundos",
            "districtName" : "Centro",
            "ibgeCode" : "3550308",
            "countrySubDivision" : "SP",
            "countryCode" : "BRA",
            "additionalInfo" : "Loja B",
            "postCode" : "17500001"
          },
          "phones" : [ {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          }, {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          } ],
          "availability" : {
            "standards" : [ {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            } ],
            "exception" : "exception",
            "isPublicAccessAllowed" : true
          },
          "services" : [ {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          } ]
        }, {
          "identification" : {
            "code" : "0001",
            "name" : "Marília",
            "type" : "POSTO_ATENDIMENTO",
            "checkDigit" : "9"
          },
          "postalAddress" : {
            "country" : "Brasil",
            "townName" : "São Paulo",
            "geographicCoordinates" : {
              "latitude" : "-90.8365180",
              "longitude" : "-180.836519"
            },
            "address" : "Av Naburo Ykesaki 1270, bloco 35, fundos",
            "districtName" : "Centro",
            "ibgeCode" : "3550308",
            "countrySubDivision" : "SP",
            "countryCode" : "BRA",
            "additionalInfo" : "Loja B",
            "postCode" : "17500001"
          },
          "phones" : [ {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          }, {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          } ],
          "availability" : {
            "standards" : [ {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            } ],
            "exception" : "exception",
            "isPublicAccessAllowed" : true
          },
          "services" : [ {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          } ]
        } ]
      }, {
        "name" : "Empresa A1",
        "cnpjNumber" : "45086338000178",
        "branches" : [ {
          "identification" : {
            "code" : "0001",
            "name" : "Marília",
            "type" : "POSTO_ATENDIMENTO",
            "checkDigit" : "9"
          },
          "postalAddress" : {
            "country" : "Brasil",
            "townName" : "São Paulo",
            "geographicCoordinates" : {
              "latitude" : "-90.8365180",
              "longitude" : "-180.836519"
            },
            "address" : "Av Naburo Ykesaki 1270, bloco 35, fundos",
            "districtName" : "Centro",
            "ibgeCode" : "3550308",
            "countrySubDivision" : "SP",
            "countryCode" : "BRA",
            "additionalInfo" : "Loja B",
            "postCode" : "17500001"
          },
          "phones" : [ {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          }, {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          } ],
          "availability" : {
            "standards" : [ {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            } ],
            "exception" : "exception",
            "isPublicAccessAllowed" : true
          },
          "services" : [ {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          } ]
        }, {
          "identification" : {
            "code" : "0001",
            "name" : "Marília",
            "type" : "POSTO_ATENDIMENTO",
            "checkDigit" : "9"
          },
          "postalAddress" : {
            "country" : "Brasil",
            "townName" : "São Paulo",
            "geographicCoordinates" : {
              "latitude" : "-90.8365180",
              "longitude" : "-180.836519"
            },
            "address" : "Av Naburo Ykesaki 1270, bloco 35, fundos",
            "districtName" : "Centro",
            "ibgeCode" : "3550308",
            "countrySubDivision" : "SP",
            "countryCode" : "BRA",
            "additionalInfo" : "Loja B",
            "postCode" : "17500001"
          },
          "phones" : [ {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          }, {
            "number" : "35721199",
            "areaCode" : "19",
            "countryCallingCode" : "55",
            "type" : "FIXO"
          } ],
          "availability" : {
            "standards" : [ {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            }, {
              "closingTime" : "16:00:57Z",
              "openingTime" : "10:00:57Z",
              "weekday" : "SEGUNDA_FEIRA"
            } ],
            "exception" : "exception",
            "isPublicAccessAllowed" : true
          },
          "services" : [ {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          }, {
            "code" : "01",
            "name" : "ENDOSSO"
          } ]
        } ]
      } ],
      "name" : "Organização AZ"
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Canais de Atendimento Eletrônico
 * Método para obter a listagem de canais eletrônicos de atendimento da instituição.
 *
 * page Integer Número da página que está sendo requisitada (o valor da primeira página é 1). (optional)
 * pageSize Integer Quantidade total de registros por páginas. (optional)
 * returns ResponseElectronicChannelsList
 **/
exports.getElectronicChannels = function(page,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "brand" : {
      "name" : "Organização A",
      "companies" : [ {
        "name" : "Empresa A1",
        "cnpjNumber" : "45086338000178",
        "urlComplementaryList" : "https://empresaa1.com/branches-insurance",
        "electronicChannels" : [ {
          "identification" : {
            "type" : "INTERNET",
            "urls" : [ "https://empresa1.com/insurance" ]
          },
          "services" : [ {
            "name" : "SEGUROS",
            "code" : "SEGUROS"
          } ]
        } ]
      } ]
    }
  },
  "links" : {
    "self" : "https://api.organizacao.com.br/open-insurance/channels/v1/electronic-channels",
    "first" : "https://api.organizacao.com.br/open-insurance/channels/v1/electronic-channels",
    "prev" : "null",
    "next" : "null",
    "last" : "https://api.organizacao.com.br/open-insurance/channels/v1/electronic-channels"
  },
  "meta" : {
    "totalRecords" : 1,
    "totalPages" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Canais de Atendimento Telefônico
 * Método para obter a listagem de canais telefônicos de atendimento da instituição.
 *
 * page Integer Número da página que está sendo requisitada (o valor da primeira página é 1). (optional)
 * pageSize Integer Quantidade total de registros por páginas. (optional)
 * returns ResponsePhoneChannelsList
 **/
exports.getPhoneChannels = function(page,pageSize) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "brand" : {
      "name" : "Organização A",
      "companies" : [ {
        "name" : "Empresa A1",
        "cnpjNumber" : "45086338000178",
        "urlComplementaryList" : "https://empresaa1.com/branches-insurance",
        "phoneChannels" : [ {
          "identification" : {
            "type" : "CENTRAL_TELEFONICA",
            "phones" : [ {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "35721199"
            }, {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "997865532"
            } ]
          },
          "services" : [ {
            "name" : "ALTERACOES_FORMA_PAGAMENTO",
            "code" : "01"
          }, {
            "name" : "AVISO_SINISTRO",
            "code" : "02"
          }, {
            "name" : "ENDOSSO",
            "code" : "05"
          } ]
        }, {
          "identification" : {
            "type" : "SAC",
            "phones" : [ {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "40044828",
              "additionalInfo" : "DDI '55'; DDD '11', 40044828, 'Para clientes no exterior'"
            }, {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "40044828",
              "additionalInfo" : "DDI '55'; DDD '11', 40044828, 'Para clientes no exterior'"
            }, {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "40044828",
              "additionalInfo" : "DDI '55'; DDD '11', 40044828, 'Para clientes no exterior'"
            } ]
          },
          "services" : [ {
            "name" : "RECLAMACAO",
            "code" : "16"
          }, {
            "name" : "PORTABILIDADE",
            "code" : "15"
          }, {
            "name" : "ENDOSSO",
            "code" : "05"
          } ]
        }, {
          "identification" : {
            "type" : "OUVIDORIA",
            "phones" : [ {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "40045555"
            }, {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "40045555"
            }, {
              "countryCallingCode" : "55",
              "areaCode" : "14",
              "number" : "40045555"
            } ]
          },
          "services" : [ {
            "name" : "RECLAMACAO",
            "code" : "16"
          }, {
            "name" : "PORTABILIDADE",
            "code" : "15"
          } ]
        } ]
      } ]
    }
  },
  "links" : {
    "self" : "https://api.organizacao.com.br/open-insurance/channels/v1/phone-channels",
    "first" : "https://api.organizacao.com.br/open-insurance/channels/v1/phone-channels",
    "prev" : "null",
    "next" : "null",
    "last" : "https://api.organizacao.com.br/open-insurance/channels/v1/phone-channels"
  },
  "meta" : {
    "totalRecords" : 1,
    "totalPages" : 1
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

