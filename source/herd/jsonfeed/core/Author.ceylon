import ceylon.uri { Uri }
import ceylon.json { JsonObject }

"Specifies the feed author. The author object has several members. These are all
 optional — but if you provide an author object, then at least one is required."
shared class Author(name, url, avatar) {

    "The author’s name."
    shared String? name;

    "The URL of a site owned by the author. It could be a blog, micro-blog, Twitter
     account, and so on. Ideally the linked-to page provides a way to contact the author,
     but that’s not required. The URL could be a mailto: link, though we suspect that will
     be rare."
    shared Uri? url;

    "The URL for an image for the author. As with icon, it should be square and relatively
     large — such as 512 x 512 — and should use transparency where appropriate, since it
     may be rendered on a non-white background."
    shared Uri? avatar;

    "One of 'name', 'url', or 'avatar' must not be null."
    assert (name exists || url exists || avatar exists);

    shared JsonObject json
        =>  JsonObject {
                {   "name" -> name,
                    "url" -> url?.string,
                    "avatar" -> avatar?.string
                }.filter((entry) => entry.item exists);
            };
}
