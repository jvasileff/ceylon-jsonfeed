import ceylon.json { JsonObject }
import ceylon.time.iso8601 { parseZoneDateTime }
import ceylon.time.timezone { ZoneDateTime }
import ceylon.uri { parseUri = parse, Uri }

shared Feed parseFeed(JsonObject json)
    =>  Feed {
            version = json.getString("version");
            title = json.getString("title");
            homePageUrl = parseFeedUri(json.getStringOrNull("home_page_url"));
            feedUrl = parseFeedUri(json.getStringOrNull("feed_url"));
            description = json.getStringOrNull("description");
            userComment = json.getStringOrNull("userComment");
            nextUrl = parseFeedUri(json.getStringOrNull("next_url"));
            icon = parseFeedUri(json.getStringOrNull("icon"));
            favicon = parseFeedUri(json.getStringOrNull("favicon"));
            author = parseAuthor(json.getObjectOrNull("author"));
            expired = getBoolean(json.getStringOrNull("expired")); // FIXME
            items = [
                for (itemJson in json.getArray("items"))
                if (is JsonObject itemJson)
                parseItem(itemJson)
            ];
        };

// FIXME REMOVE
Boolean? getBoolean(String? string)
    =>  if (exists string)
        then string == "true"
        else null;

shared Author? parseAuthor(JsonObject? json) {
    if (exists json) {
        return Author {
            name = json.getStringOrNull("name");
            url = parseFeedUri(json.getStringOrNull("url"));
            avatar = parseFeedUri(json.getStringOrNull("avatar"));
        };
    }
    return null;
}

shared Item parseItem(JsonObject json)
    =>  Item {
            id = json.getString("id");
            url = parseFeedUri(json.getStringOrNull("url"));
            externalUrl = parseFeedUri(json.getStringOrNull("url"));
            title = json.getStringOrNull("title");
            contentHtml = json.getStringOrNull("content_html");
            contentText = json.getStringOrNull("content_text");
            summary = json.getStringOrNull("summary");
            image = parseFeedUri(json.getStringOrNull("image"));
            bannerImage = parseFeedUri(json.getStringOrNull("banner_image"));
            datePublished = parseFeedDate(json.getStringOrNull("date_published"));
            dateModified = parseFeedDate(json.getStringOrNull("date_modified"));
            author = parseAuthor(json.getObjectOrNull("author"));
            tags = (json.getArrayOrNull("tags") else []).collect((tag) {
                assert (is String tag);
                return tag;  
            });
            attachments = (json.getArrayOrNull("attachments") else [])
                    .collect((attachment) {
                assert (is JsonObject attachment);
                return parseAttachment(attachment);
            });
        };

shared Attachment parseAttachment(JsonObject json)
    =>  Attachment {
            url = parseFeedUri(json.getString("url"));
            mimeType = json.getString("mime_type");
            title = json.getStringOrNull("title");
            sizeInBytes = json.getIntegerOrNull("size_in_bytes");
            durationInSeconds = json.getIntegerOrNull("duration_in_seconds");
        };

ZoneDateTime? parseFeedDate(String? string) {
    if (exists string) {
        "Must be a valid date: '``string``'"
        assert (exists result = parseZoneDateTime(string));
        return result;
    }
    return null;
}

Uri | Absent parseFeedUri<Absent>(String | Absent string)
        given Absent satisfies Null {
    if (exists string) {
        return parseUri(string);
    }
    assert (is Absent null);
    return null;
}
