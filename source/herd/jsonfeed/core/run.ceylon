import ceylon.json { JsonObject, parseJson = parse }

void run() {
    assert (is JsonObject json = parseJson(example));
    value feed = parseFeed(json);
    print("\nRecent articles published on ``feed.title``:\n");
    for (item in feed.items.take(10)) {    
        print("• ``item.title else "untitled"`` (``item.datePublished?.date else "nodate"``)");
    }
}

String example =
 """{
        "version": "https://jsonfeed.org/version/1",
        "title": "My Example Feed",
        "home_page_url": "https://example.org/",
        "feed_url": "https://example.org/feed.json",
        "items": [
            {
                "id": "2",
                "content_text": "This is a second item.",
                "url": "https://example.org/second-item"
            },
            {
                "id": "1",
                "content_html": "<p>Hello, world!</p>",
                "url": "https://example.org/initial-post"
            }
        ]
    }""";
