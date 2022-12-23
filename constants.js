
module.exports = Object.freeze({
/* We use HttpMethod as an enum in case e.g. the literals
 "GET" or "POST" get changed in HTTP messages
 */
     HttpMethod : {
        GET: "GET",
        POST: "POST"
    },
    port : 3000,
    hostName : "127.0.0.1",
    CalculatorCacheSize : 3
});
