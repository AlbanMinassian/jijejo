'use strict';

function jsonin(optin, meta = {}, options = {}) {
  return {
    meta: meta,
    in: optin
  };
}

function jsonerr(optin, meta = {}, options = {}) {
  return {
    meta: meta,
    isout: false,
    iserr: true,
    err: optin
  };
}

function jsonout(optin, meta = {}, options = {}) {
  return {
    meta: meta,
    isout: true,
    iserr: false,
    out: optin
  };
}

var jijejo_node = {
  jsonin: jsonin,
  jsonerr: jsonerr,
  jsonout: jsonout
};

module.exports = jijejo_node;
