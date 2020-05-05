# Jexl [![Build Status](https://travis-ci.org/logicsquad/Jexl.svg?branch=master)](https://travis-ci.org/logicsquad/Jexl)

This is a fork of [TomFrost/Jexl](https://github.com/TomFrost/Jexl),
providing some minimal glue for building a browser-friendly bundle
with [webpack](https://webpack.js.org). If you're looking for the
original project, follow the link above. If you're looking for the
original documentation, see `doc/usage.md`.

## How do I build a bundle for the browser with webpack?

Clone this project:

```
$ git clone https://github.com/logicsquad/Jexl.git
```

Then run webpack over it:

```
$ cd Jexl
$ npx webpack --config webpack.config.js
```

The output bundle is `dist/jexl.js`.

## How do I use Jexl in the browser?

Include it in your page:

```
<script type="text/javascript" src="jexl.js"></script>
```

The global `jexl` variable is then a `Jexl` object, and you can use it
in the usual way:

```
jexl.eval(expression, context).then(function(res) {
    console.log(res);
});
```

If you need a new `Jexl` object, you can create one with:

```
var j = new jexl.Jexl();
```

## Roadmap

This project was forked from
[TomFrost/Jexl](https://github.com/TomFrost/Jexl) at version 2.2.2. We
might keep this up to date, but we might not. If you need the latest
version of Jexl, see the original project.

## License

This fork of Jexl is licensed under 3-Clause BSD License: see
`LICENSE.txt`.
