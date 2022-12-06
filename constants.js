
module.exports = Object.freeze({
/* We use HttpMethod as an enum in case e.g. the literals
 "GET" or "POST" get changed in HTTP messages
 */
    HttpMethod : {
        GET: "GET",
        POST: "POST"
    }
});