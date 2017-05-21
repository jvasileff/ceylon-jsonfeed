import ceylon.json { JsonObject, parseJson = parse }
import herd.jsonfeed.core { parseFeed }
import java.io { BufferedReader, InputStreamReader }
import java.net { URL }

shared void run() {
    processUrl("http://shapeof.com/feed.json");
    processUrl("http://flyingmeat.com/blog/feed.json");
    processUrl("http://maybepizza.com/feed.json");
    processUrl("https://daringfireball.net/feeds/json");
    processUrl("http://hypercritical.co/feeds/main.json");
    processUrl("http://inessential.com/feed.json");
    processUrl("https://manton.org/feed/json");
    processUrl("https://micro.blog/feeds/manton.json");
    // processUrl("http://timetable.manton.org/feed.json");
    processUrl("http://therecord.co/feed.json");
    processUrl("http://www.allenpike.com/feed.json");
    processUrl("https://jsonfeed.org/feed.json");
}

shared void processUrl(String url) {
    assert (is JsonObject json = parseJson(readUrl(url)));
    value feed = parseFeed(json);
    print("\nRecent articles published on '``feed.title``':\n");
    for (item in feed.items.take(10)) {
        print("• ``item.datePublished?.date else "unknown date"``: \
               ``item.title else "untitled"``");
    }
}

String readUrl(String url) {
    value sb = StringBuilder();
    try (br = BufferedReader(InputStreamReader(URL(url).openStream(), "UTF-8"))) {
        while (exists inputLine = br.readLine()) {
            sb.append(inputLine + "\n");
        }
    }
    return sb.string;
}
