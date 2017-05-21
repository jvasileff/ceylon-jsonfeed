# JSON Feed for Ceylon

JSON Feed for Ceylon provides domain objects and a parser for [JSON
Feed](https://jsonfeed.org). Source code for the following Ceylon modules is
available in this repository:

- `herd.jsonfeed.core`: The parser and domain objects
- `herd.jsonfeed.jvmSample`: A small sample CLI program for the Java backend
- `herd.jsonfeed.jsSample`: A small sample web program for the JavaScript
  backend

## Building the Modules

#### Compile the Java backend core and sample modules with:

    ceylon compile

#### Compile the JavaScript backend core and sample modules with:

    ceylon compile-js

#### Run the JavaScript sample module:

1. Build the modules as described above with `ceylon compile-js`
2. Copy dependencies to the modules directory with `ceylon copy --js --with-dependencies herd.jsonfeed.jsSample`
3. Open `index.html` in a web browser

## Using the Module

To use the module, simply add the following import to `module.ceylon`:

```ceylon
import herd.jsonfeed.core "0.0.0";
```

The following code can be used to obtain an instance of `Feed` from a JSON
String:

```ceylon
import ceylon.json { JsonObject, parseJson = parse }
import herd.jsonfeed.core { parseFeed }

shared void run() {
    String rawJson = ...;
    assert (is JsonObject json = parseJson(rawJson));
    Feed feed = parseFeed(json);
}
```

## License

The content of this repository is released under the MIT License as provided in
the LICENSE file that accompanied this code.

By submitting a "pull request" or otherwise contributing to this repository,
you agree to license your contribution under the license mentioned above.
