import ceylon.uri { Uri }
import ceylon.json { JsonObject, JsonArray }

"A `Feed`, as described in the
 [JSON Feed Verson 1 Specification](https://jsonfeed.org/version/1)."
shared class Feed(
        version, title, homePageUrl, feedUrl, description, userComment, nextUrl, icon,
        favicon, author, expired, items) {

    "The URL of the version of the format the feed uses. This should appear at the very
     top, though we recognize that not all JSON generators allow for ordering."
    shared String version;

    "The name of the feed, which will often correspond to the name of the website (blog,
     for instance), though not necessarily."
    shared String title;

    "The URL of the resource that the feed describes. This resource may or may not
     actually be a “home” page, but it should be an HTML page. If a feed is published on
     the public web, this should be considered as required. But it may not make sense in
     the case of a file created on a desktop computer, when that file is not shared or is
     shared only privately."
    shared Uri? homePageUrl;

    "The URL of the feed, and serves as the unique identifier for the feed. As with
     home_page_url, this should be considered required for feeds on the public web."
    shared Uri? feedUrl;

    "Provides more detail, beyond the title, on what the feed is about. A feed reader may
     display this text."
    shared String? description;

    "Description of the purpose of the feed. This is for the use of people looking at the
     raw JSON, and should be ignored by feed readers."
    shared String? userComment;

    "The URL of a feed that provides the next n items, where n is determined by the
     publisher. This allows for pagination, but with the expectation that reader software
     is not required to use it and probably won’t use it very often. next_url must not be
     the same as feed_url, and it must not be the same as a previous next_url (to avoid
     infinite loops)."
    shared Uri? nextUrl;

    "The URL of an image for the feed suitable to be used in a timeline, much the way an
     avatar might be used. It should be square and relatively large — such as 512 x 512 —
     so that it can be scaled-down and so that it can look good on retina displays. It
     should use transparency where appropriate, since it may be rendered on a non-white
     background."
    shared Uri? icon;

    "The URL of an image for the feed suitable to be used in a source list. It should be
     square and relatively small, but not smaller than 64 x 64 (so that it can look good
     on retina displays). As with icon, this image should use transparency where
     appropriate, since it may be rendered on a non-white background."
    shared Uri? favicon;

    "Specifies the feed author."
    shared Author? author;

    "Indicates whether or not the feed is finished — that is, whether or not it will ever
     update again. A feed for a temporary event, such as an instance of the Olympics,
     could expire. If the value is true, then it’s expired. Any other value, or the
     absence of expired, means the feed may continue to update."
    shared Boolean? expired;

    // TODO hubs

    "Feed items."
    shared [Item*] items;

    "This feed as a `JsonObject`"
    shared JsonObject json
        =>  JsonObject {
                {   "version" -> version,
                    "title" -> title,
                    "home_page_url" -> homePageUrl?.string,
                    "feed_url" -> feedUrl?.string,
                    "description" -> description,
                    "user_comment" -> userComment,
                    "next_url" -> nextUrl?.string,
                    "icon" -> icon?.string,
                    "favicon" -> favicon?.string,
                    "author" -> author?.json,
                    "expired" -> expired?.string,
                    "items" -> JsonArray { for (item in items) item.json }
                }.filter((entry) => entry.item exists);
            };
}
