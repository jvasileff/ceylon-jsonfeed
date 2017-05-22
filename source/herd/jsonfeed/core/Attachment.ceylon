import ceylon.uri { Uri }
import ceylon.json { JsonObject }

"An `Attachment`, as described in the
 [JSON Feed Verson 1 Specification](https://jsonfeed.org/version/1).
 
 An individual [[Item]] may have one or more attachments."
shared class Attachment(url, mimeType, title, sizeInBytes, durationInSeconds) {

    "The location of the attachment."
    shared Uri url;

    "The type of the attachment, such as “audio/mpeg."
    shared String mimeType;

    "A name for the attachment. Important: if there are multiple attachments, and two or
     more have the exact same title (when title is present), then they are considered as
     alternate representations of the same thing. In this way a podcaster, for instance,
     might provide an audio recording in different formats."
    shared String? title;

    "Specifies how large the file is."
    shared Integer? sizeInBytes;

    "Specifies how long the attachment takes to listen to or watch."
    shared Integer? durationInSeconds;

    "This attachment as a `JsonObject`"
    shared JsonObject json
        =>  JsonObject {
                {   "url" -> url.string,
                    "mimeType" -> mimeType,
                    "title" -> title,
                    "size_in_bytes" -> sizeInBytes,
                    "duration_in_seconds" -> durationInSeconds
                }.filter((entry) => entry.item exists);
            };
}
