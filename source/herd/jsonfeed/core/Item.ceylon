import ceylon.uri { Uri }
import ceylon.time.timezone { ZoneDateTime }
import ceylon.json { JsonObject }

shared class Item(
        id, url, externalUrl, title, contentHtml, contentText, summary, image,
        bannerImage, datePublished, dateModified, author, tags, attachments) {

    "`id` is unique for that item for that feed over time. If an item is ever updated, the
     id should be unchanged. New items should never use a previously-used id. If an id is
     presented as a number or other type, a JSON Feed reader must coerce it to a string.
     Ideally, the id is the full URL of the resource described by the item, since URLs
     make great unique identifiers."
    shared String id;

    "The URL of the resource described by the item. It’s the permalink. This may be the
     same as the id — but should be present regardless."
    shared Uri? url;

    "The URL of a page elsewhere. This is especially useful for linkblogs. If url links to
     where you’re talking about a thing, then external_url links to the thing you’re
     talking about."
    shared Uri? externalUrl;

    "`title` is plain text. Microblog items in particular may omit titles."
    shared String? title;

    "`contentHtml` and `contentText` are each optional strings — but one or both must be
     present. This is the HTML or plain text of the item. Important: the only place HTML
     is allowed in this format is in `contentHtml`. A Twitter-like service might use
     `contentText`, while a blog might use `contentHtml`. Use whichever makes sense for
     your resource. (It doesn’t even have to be the same for each item in a feed.)"
    shared String? contentHtml;

    "`contentHtml` and `contentText` are each optional strings — but one or both must be
     present. This is the HTML or plain text of the item. Important: the only place HTML
     is allowed in this format is in `contentHtml`. A Twitter-like service might use
     `contentText`, while a blog might use `contentHtml`. Use whichever makes sense for
     your resource. (It doesn’t even have to be the same for each item in a feed.)"
    shared String? contentText;

    "A plain text sentence or two describing the item. This might be presented in a
     timeline, for instance, where a detail view would display all of content_html or
     content_text."
    shared String? summary;

    "The URL of the main image for the item. This image may also appear in the
     content_html — if so, it’s a hint to the feed reader that this is the main, featured
     image. Feed readers may use the image as a preview (probably resized as a thumbnail
     and placed in a timeline)."
    shared Uri? image;

    "The URL of an image to use as a banner. Some blogging systems (such as Medium)
     display a different banner image chosen to go with each post, but that image wouldn’t
     otherwise appear in the content_html. A feed reader with a detail view may choose to
     show this banner image at the top of the detail view, possibly with the title
     overlaid."
    shared Uri? bannerImage;

    "Specifies the date in RFC 3339 format."
    shared ZoneDateTime? datePublished;

    "Specifies the modification date in RFC 3339 format."
    shared ZoneDateTime? dateModified;

    "`author` has the same structure as the top-level author. If not specified in an item,
     then the top-level author, if present, is the author of the item."
    shared Author? author;

    "`tags` can have any plain text values you want. Tags tend to be just one word, but
     they may be anything. Note: they are not the equivalent of Twitter hashtags. Some
     blogging systems and other feed formats call these categories."
    shared [String*] tags;

    "An individual item may have one or more attachments."
    shared [Attachment*] attachments;

    "One of 'content_html' or 'content_text' must not be null."
    assert (contentHtml exists || contentText exists);

    shared JsonObject json
        =>  JsonObject {
                {   "id" -> id,
                    "url" -> url?.string,
                    "external_url" -> externalUrl?.string,
                    "title" -> title,
                    "content_html" -> contentHtml,
                    "content_text" -> contentText,
                    "image" -> image?.string,
                    "banner_image" -> bannerImage?.string,
                    "date_published" -> datePublished?.string,
                    "date_modified" -> dateModified?.string
                    // "author" -> author,
                    // "tags" -> tags
                    // "attachments" -> attachments
                }.filter((entry) => entry.item exists);
            };
}
