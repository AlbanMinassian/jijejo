'use strict';

function is_object(optin) {
  // https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
  return !!optin && optin.constructor === Object;
}

function jsonerr(optin, meta = {}, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    throw new Error("missing param");
  } // ----------------------------------------------------------------------------
  // meta is not an object
  // ----------------------------------------------------------------------------


  if (is_object(meta) === false) {
    throw new Error("meta is not an object");
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return {
    meta: meta,
    isout: false,
    iserr: true,
    err: optin
  };
}

function jsonin(optin, meta = {}, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    throw new Error("missing param");
  } // ----------------------------------------------------------------------------
  // meta is not an object
  // ----------------------------------------------------------------------------


  if (is_object(meta) === false) {
    throw new Error("meta is not an object");
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return {
    meta: meta,
    in: optin
  };
}

function jsonout(optin, meta = {}, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    throw new Error("missing param");
  } // ----------------------------------------------------------------------------
  // meta is not an object
  // ----------------------------------------------------------------------------


  if (is_object(meta) === false) {
    throw new Error("meta is not an object");
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return {
    meta: meta,
    isout: true,
    iserr: false,
    out: optin
  };
}

const allow_keys = ["meta", "in"];
function jicheck(optin, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    return jsonerr({
      "message": "missing param"
    });
  } // ----------------------------------------------------------------------------
  // first param is object
  // ----------------------------------------------------------------------------


  if (is_object(optin) === false) {
    return jsonerr({
      "message": "first param is not an object"
    });
  } // ----------------------------------------------------------------------------
  // check attributs
  // ----------------------------------------------------------------------------


  if (optin.hasOwnProperty("meta") === false) {
    return jsonerr({
      message: `missing .meta attribut`
    });
  }

  if (is_object(optin.meta) === false) {
    return jsonerr({
      message: `.meta attribut is not an object`
    });
  }

  if (optin.hasOwnProperty("in") === false) {
    return jsonerr({
      message: `missing .in attribut`
    });
  } // ----------------------------------------------------------------------------
  // check unknow attributes
  // ----------------------------------------------------------------------------


  const keys = Object.keys(optin);

  for (const key of keys) {
    if (allow_keys.includes(key) === false) {
      return jsonerr({
        message: `.${key} not allow`
      });
    }
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return jsonout(true);
}

const allow_keys$1 = ["meta", "isout", "iserr", "err"];
function jecheck(optin, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    return jsonerr({
      "message": "missing param"
    });
  } // ----------------------------------------------------------------------------
  // first param is object
  // ----------------------------------------------------------------------------


  if (is_object(optin) === false) {
    return jsonerr({
      "message": "first param is not an object"
    });
  } // ----------------------------------------------------------------------------
  // check attributs
  // ----------------------------------------------------------------------------


  if (optin.hasOwnProperty("meta") === false) {
    return jsonerr({
      message: `missing .meta attribut`
    });
  }

  if (is_object(optin.meta) === false) {
    return jsonerr({
      message: `.meta attribut is not an object`
    });
  }

  if (optin.hasOwnProperty("isout") === false) {
    return jsonerr({
      message: `missing .isout attribut`
    });
  }

  if (optin.hasOwnProperty("iserr") === false) {
    return jsonerr({
      message: `missing .iserr attribut`
    });
  }

  if (optin.hasOwnProperty("err") === false) {
    return jsonerr({
      message: `missing .err attribut`
    });
  }

  if (optin.hasOwnProperty("out") === true) {
    return jsonerr({
      message: `.out attribut not allow`
    });
  }

  if (optin.isout === true) {
    return jsonerr({
      message: `.isout==true not allow`
    });
  }

  if (optin.iserr === false) {
    return jsonerr({
      message: `.iserr==false not allow`
    });
  } // ----------------------------------------------------------------------------
  // check unknow attributes
  // ----------------------------------------------------------------------------


  const keys = Object.keys(optin);

  for (const key of keys) {
    if (allow_keys$1.includes(key) === false) {
      return jsonerr({
        message: `.${key} not allow`
      });
    }
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return jsonout(true);
}

const allow_keys$2 = ["meta", "isout", "iserr", "out"];
function jocheck(optin, options = {}) {
  // ----------------------------------------------------------------------------
  // no param
  // ----------------------------------------------------------------------------
  if (optin === undefined) {
    return jsonerr({
      "message": "missing param"
    });
  } // ----------------------------------------------------------------------------
  // first param is object
  // ----------------------------------------------------------------------------


  if (is_object(optin) === false) {
    return jsonerr({
      "message": "first param is not an object"
    });
  } // ----------------------------------------------------------------------------
  // check attributs
  // ----------------------------------------------------------------------------


  if (optin.hasOwnProperty("meta") === false) {
    return jsonerr({
      message: `missing .meta attribut`
    });
  }

  if (is_object(optin.meta) === false) {
    return jsonerr({
      message: `.meta attribut is not an object`
    });
  }

  if (optin.hasOwnProperty("isout") === false) {
    return jsonerr({
      message: `missing .isout attribut`
    });
  }

  if (optin.hasOwnProperty("iserr") === false) {
    return jsonerr({
      message: `missing .iserr attribut`
    });
  }

  if (optin.hasOwnProperty("out") === false) {
    return jsonerr({
      message: `missing .out attribut`
    });
  }

  if (optin.hasOwnProperty("err") === true) {
    return jsonerr({
      message: `.err attribut not allow`
    });
  }

  if (optin.iserr === true) {
    return jsonerr({
      message: `.iserr==true not allow`
    });
  }

  if (optin.isout === false) {
    return jsonerr({
      message: `.isout==false not allow`
    });
  } // ----------------------------------------------------------------------------
  // check unknow attributes
  // ----------------------------------------------------------------------------


  const keys = Object.keys(optin);

  for (const key of keys) {
    if (allow_keys$2.includes(key) === false) {
      return jsonerr({
        message: `.${key} not allow`
      });
    }
  } // ----------------------------------------------------------------------------
  // ok
  // ----------------------------------------------------------------------------


  return jsonout(true);
}

var jijejo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  jsonin: jsonin,
  jsonerr: jsonerr,
  jsonout: jsonout,
  jicheck: jicheck,
  jecheck: jecheck,
  jocheck: jocheck
});

module.exports = jijejo;
