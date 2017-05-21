import ceylon.json { JsonObject, parseJson = parse }
import ceylon.uri { Uri }
import ceylon.html { ... }
import herd.jsonfeed.core { ... }

shared void run() {
    attachOnChange("feedSelection", (Anything event) {
        dynamic {
            dynamic select = document.getElementById("feedSelection");
            String? url = select.\ivalue;
            if (exists url, !url.empty) {
                setInnerHtml("container", H3 { "loading..." }.string);
                processUrlContent(url, processFeed);
            }
        }
    });
}

void processFeed(String json) {
    assert (is JsonObject jsonObject = parseJson(json));
    value feed = parseFeed(jsonObject);
    setInnerHtml("container", feedToHtml(feed).string);
}

void processUrlContent(String url, void consume(String s)) {
    dynamic {
        dynamic req = XMLHttpRequest();
        req.open("GET", url);
        req.onload = (dynamic event) => consume(req.responseText);
        req.send();
    }
}

void setInnerHtml(String id, String html) {
    dynamic {
        dynamic element = document.getElementById(id);
        element.innerHTML = html;
    }
}

void attachOnChange(String id, void consume(Anything event)) {
    dynamic {
        dynamic element = document.getElementById(id);
        element.onchange = consume;
    }
}

Element feedToHtml(Feed feed)
    =>  Div {
            H3 {
                "Recent articles published on ",
                anchor {
                    href = feed.homePageUrl;
                    element = Em { children = { feed.title }; };
                },
                ":"
            },
            {   for (item in feed.items.take(10))
                Ul {
                    Li {
                        children = {
                            "``item.datePublished?.date else "unknown date"``: ",
                            anchorFlow {
                                item.url;
                                "``defaultedString(item.title, "untitled")``";
                            }
                        };
                    }
                }
            }
        };

String defaultedString(String? str, String def)
    =>  if (exists str, !str.trimmed.empty)
        then str else def;

Content<PhrasingCategory>|A anchor(Uri? href, Content<PhrasingCategory> element) {
    if (exists href) {
        return A {
            href = href.string;
            Span { element }
        };
    }
    return element;
}

Content<FlowCategory>|A anchorFlow(Uri? href, Content<FlowCategory> element) {
    if (exists href) {
        return A {
            href = href.string;
            element
        };
    }
    return element;
}
