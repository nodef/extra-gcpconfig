Get ready to use [GCP Config] from parameters and environment variables.
> Do you want to:
> - Have GCP Config loaded from environment variables?
> - Get GCP Config from arguments?

<br>
<br>


## Setup

1. Run `npm install -g extra-gcpconfig` in **console**.
2. To install this as a package use `npm install extra-gcpconfig`.

<br>
<br>


## Console

```bash
gcpconfig
# get default GCP config

gcpconfig --credentialsFile credentials.json
gcpconfig --keyFilename credentials.json
# use a custom credentials file
## credentials/config file can be JSON
```


### Reference

```bash
gcpconfig [options]
# -> GCP config as JSON

# Options:
# --help: show this help
# -cf, --credentialsFile: set custom GCP credentails file path
# -kf, --keyFilename:     set custom GCP credentails file path

# Environment variables:
$GOOGLE_APPLICATION_CREDENTIALS # set default GCP credentails file path
```

<br>
<br>


## Package

```javascript
const gcpconfig = require('extra-gcpconfig');

gcpconfig();
// get default GCP config

gcpconfig({keyFilename: 'credentials.json'});
// use a custom credentials file
/// credentials/config file can be JSON

var A = process.argv, o = {};
for(var i=0, I=A.length; i<I;)
  i = gcpconfig.options(o, A[i], A, i);
gcpconfig(o);
// get GCP config from arguments
```


### Reference

```javascript
const gcpconfig = require('extra-gcpconfig');

gcpconfig.options(options, argument_key, arguments, index);
// options: target object to store GCP config options
// argument_key: name of the argument (ex: "--help")
// arguments: arguments array (ex: process.argv)
// index: current index in arguments array (ex: i=2...args.length)
// -> new index in arguments array


gcpconfig(options);
// options: custom GCP config options
// -> GCP config options

// Default options:
options = {
  keyFilename: null // set custom GCP credentails file path
};
```

<br>
<br>


## Similar

Do you need anything similar?
> - [extra-googletranslate] can translate long text to target language.
> - [extra-googletts] can generate speech from text.

Suggestions are welcome. Please [create an issue].

<br>
<br>


[![nodef](https://i.imgur.com/eO4zcjv.jpg)](https://nodef.github.io)
> References: [GCP Config].

[GCP Config]: https://cloud.google.com/docs/authentication/production
[extra-googletranslate]: https://www.npmjs.com/package/extra-googletranslate
[extra-googletts]: https://www.npmjs.com/package/extra-googletts
[create an issue]: https://github.com/nodef/extra-gcpconfig/issues
