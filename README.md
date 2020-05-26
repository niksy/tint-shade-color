# tint-shade-color

[![Build Status][ci-img]][ci]
[![BrowserStack Status][browserstack-img]][browserstack]

Tint or shade color.

Similar to Bourbon [tint](https://www.bourbon.io/docs/5.1.0/#tint) and
[shade](https://www.bourbon.io/docs/5.1.0/#shade) functions (see
[test case](https://www.sassmeister.com/gist/3f26feec549a19eb92ffcde796d84f70)).

## Install

```sh
npm install tint-shade-color --save
```

## Usage

```js
import { tint, shade } from 'tint-shade-color';

tint('#6ecaa6', 0.4); // #a8dfca
shade('#ffbb52', 0.6); // #664b21
```

## API

### tint|shade(color, [percentage])

Returns: `string`

Mixes a color with white (if tint) or black (if shade).

#### color

Type: `string`

Color to mix with white (if tint) or black (if shade). It should be a
[valid hex color](https://github.com/tunnckocore/is-hexcolor).

#### percentage

Type: `number`  
Default: `1`

The amount of white (if tint) or black (if shade) to be mixed in.

## Acknowledgments

Original function taken from
[Sass `mix()` function gist](https://gist.github.com/jedfoster/7939513).

## Browser support

Tested in IE9+ and all modern browsers.

## Test

For automated tests, run `npm run test:automated` (append `:watch` for watcher
support).

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/tint-shade-color
[ci-img]: https://travis-ci.com/niksy/tint-shade-color.svg?branch=master
[browserstack]: https://www.browserstack.com/
[browserstack-img]: https://www.browserstack.com/automate/badge.svg?badge_key=bDRSN3VtNGJIYkxYUExZcHBTeDdaZnJYUjFNMnVSVnEyeFA3aGVjbXA0UT0tLTBYMlM1NTVseFN3UjZNc3NpNmtFL0E9PQ==--ffd892624a3f2c5295b5fa605f6b32c9308f8c69

<!-- prettier-ignore-end -->
