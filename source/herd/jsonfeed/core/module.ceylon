 """JSON Feed for Ceylon provides domain objects and a parser for
    [JSON Feed](https://jsonfeed.org).

    To use, parse a JSON string using the `ceylon.json` module, and then convert the
    resultant `JsonObject` to a [[Feed]] as shown in the code below:

    ```ceylon
    import ceylon.json { JsonObject, parseJson = parse }
    import herd.jsonfeed.core { Feed, parseFeed }

    shared void run() {
        String rawJson = ...;
        assert (is JsonObject json = parseJson(rawJson));
        Feed feed = parseFeed(json);
    }
    ```
 """
module herd.jsonfeed.core "0.0.0" {
    shared import ceylon.json "1.3.2";
    shared import ceylon.uri "1.3.2";
    shared import ceylon.time "1.3.2";
}
