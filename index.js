#!/usr/bin/env node
const _ = require('lodash');


// Global variables.
const E = process.env;
const DEFAULTS = {
  keyFilename: E['GOOGLE_APPLICATION_CREDENTIALS']||null
};


// Get default options.
function defaults(o) {
  o.keyFilename = o.keyFilename||DEFAULTS.keyFilename;
  return o;
};

/**
 * Get options from arguments.
 * This is to be called from arguments processing loop.
 * @param {object} o AWS options.
 * @param {string} k Argument key.
 * @param {array} a Argument array.
 * @param {integer} i Argument index.
 * @returns {integer} New argumemnt index.
 */
function options(o, k, a, i) {
  var e = k.indexOf('='), v = null, bool = () => true, str = () => a[++i];
  if(e>=0) { v = k.substring(e+1); bool = () => boolean(v); str = () => v; k = k.substring(o, e); }
  var kc = _.camelCase(k); k = (k.startsWith('--')? '--'+kc:k);
  if(k==='--help') o.help = bool();
  else if(k==='-kf' || k==='--keyFilename') o.keyFilename = str();
  else if(k==='-cf' || k==='--credentialsFile') o.keyFilename = str();
  else o.argv = a[i];
  return i+1;
};

/**
 * Get GCP Config with default options.
 * @param {object} o Custom options.
 */
function gcpconfig(o) {
  var o = defaults(Object.assign({}, DEFAULTS, o));
  var i = Math.floor(65535*Math.random());
  var key = o.keyFilename? o.keyFilename.split(';'):null;
  o.keyFilename = key? key[i % key.length]:null;
  return o;
};

gcpconfig.options = options;
module.exports = gcpconfig;


// Run on shell.
function shell(a) {
  for(var i=2, I=a.length, o={}; i<I;)
    i = options(o, a[i], a, i);
  console.log(gcpconfig(o));
};
if(require.main===module) shell(process.argv);
