export enum StandardRequestHeaders {
	/**
	 * Media type(s) that is(/are) acceptable for the response. See Content negotiation.
	 * Example: Accept: text/plain
	 */
	Accept = 'accept',
	/**
	 * Character sets that are acceptable.
	 * Example: Accept-Charset: utf-8
	 */
	AcceptCharset = 'accept-charset',
	/**
	 * List of acceptable encodings. See HTTP compression.
	 * Example: Accept-Encoding: gzip, deflate
	 */
	AcceptEncoding = 'accept-encoding',
	/**
	 * List of acceptable human languages for response. See Content negotiation.
	 * Example: Accept-Language: en-US
	 */
	AcceptLanguage = 'accept-language',
	/**
	 * Acceptable version in time.
	 * Example: Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT
	 */
	AcceptDatetime = 'accept-datetime',
	/**
	 * Initiates a request for cross-origin resource sharing with Origin (below).
	 * Example: Access-Control-Request-Method: GET
	 */
	AccessControlRequestMethod = 'access-control-request-method',
	/**
	 * Initiates a request for cross-origin resource sharing with Origin (below).
	 * Example: Access-Control-Request-Method: GET
	 */
	AccessControlRequestHeaders = 'access-control-request-headers',
	/**
	 * Authentication credentials for HTTP authentication.
	 * Example: Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
	 */
	Authorization = 'authorization',
	/**
	 * Used to specify directives that must be obeyed by all caching mechanisms along the request-response chain.
	 * Example: Cache-Control: no-cache
	 */
	CacheControl = 'cache-control',
	/**
	 * Control options for the current connection and list of hop-by-hop request fields.
	 * Must not be used with HTTP/2.
	 *
	 * Example: Connection: keep-alive
	 * Connection: Upgrade
	 *
	 */
	Connection = 'connection',
	/**
	 * An HTTP cookie previously sent by the server with Set-Cookie (below).
	 * Example: Cookie: $Version=1; Skin=new;
	 */
	Cookie = 'cookie',
	/**
	 * The length of the request body in octets (8-bit bytes).
	 * Example: Content-Length: 348
	 */
	ContentLength = 'content-length',
	/**
	 * A Base64-encoded binary MD5 sum of the content of the request body.
	 * Example: Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==
	 */
	ContentMD5 = 'content-md5',
	/**
	 * The Media type of the body of the request (used with POST and PUT requests).
	 * Example: Content-Type: application/x-www-form-urlencoded
	 */
	ContentType = 'content-type',
	/**
	 * The date and time that the message was originated (in "HTTP-date" format as defined by RFC 7231 Date/Time Formats).
	 * Example: Date: Tue, 15 Nov 1994 08:12:31 GMT
	 */
	Date = 'date',
	/**
	 * Indicates that particular server behaviors are required by the client.
	 * Example: Expect: 100-continue
	 */
	Expect = 'expect',
	/**
	 * Disclose original information of a client connecting to a web server through an HTTP proxy.
	 * Example: Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43 Forwarded: for=192.0.2.43, for=198.51.100.17
	 */
	Forwarded = 'forwarded',
	/**
	 * The email address of the user making the request.
	 * Example: From: user@example.com
	 */
	From = 'from',
	/**
	 * The domain name of the server (for virtual hosting), and the TCP port number on which the server is listening. The port number may be omitted if the port is the standard port for the service requested.
	 * Mandatory since HTTP/1.1. If the request is generated directly in HTTP/2, it should not be used.
	 *
	 * Example: Host: en.wikipedia.org:8080
	 * Host: en.wikipedia.org
	 *
	 */
	Host = 'host',
	/**
	 * Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it.
	 * Example: If-Match: "737060cd8c284d8af7ad3082f209582d"
	 */
	IfMatch = 'if-match',
	/**
	 * Allows a 304 Not Modified to be returned if content is unchanged.
	 * Example: If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT
	 */
	IfModifiedSince = 'if-modified-since',
	/**
	 * Allows a 304 Not Modified to be returned if content is unchanged, see HTTP ETag.
	 * Example: If-None-Match: "737060cd8c284d8af7ad3082f209582d"
	 */
	IfNoneMatch = 'if-none-match',
	/**
	 * If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity.
	 * Example: If-Range: "737060cd8c284d8af7ad3082f209582d"
	 */
	IfRange = 'if-range',
	/**
	 * Only send the response if the entity has not been modified since a specific time.
	 * Example: If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT
	 */
	IfUnmodifiedSince = 'if-unmodified-since',
	/**
	 * Limit the number of times the message can be forwarded through proxies or gateways.
	 * Example: Max-Forwards: 10
	 */
	MaxForwards = 'max-forwards',
	/**
	 * Initiates a request for cross-origin resource sharing (asks server for Access-Control-* response fields).
	 * Example: Origin: http://www.example-social-network.com
	 */
	Origin = 'origin',
	/**
	 * Implementation-specific fields that may have various effects anywhere along the request-response chain.
	 * Example: Pragma: no-cache
	 */
	Pragma = 'pragma',
	/**
	 * Authorization credentials for connecting to a proxy.
	 * Example: Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
	 */
	ProxyAuthorization = 'proxy-authorization',
	/**
	 * Request only part of an entity. Bytes are numbered from 0. See Byte serving.
	 * Example: Range: bytes=500-999
	 */
	Range = 'range',
	/**
	 * This is the address of the previous web page from which a link to the currently requested page was followed. (The word “referrer” has been misspelled in the RFC as well as in most implementations to the point that it has become standard usage and is considered correct terminology)
	 * Example: Referer: http://en.wikipedia.org/wiki/Main_Page
	 */
	Referer = 'referer',
	/**
	 * The transfer encodings the user agent is willing to accept: the same values as for the response header field Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the server it expects to receive additional fields in the trailer after the last, zero-sized, chunk.
	 * Only trailers is supported in HTTP/2.
	 *
	 * Example: TE: trailers, deflate
	 */
	TE = 'te',
	/**
	 * The user agent string of the user agent.
	 * Example: User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/12.0
	 */
	UserAgent = 'user-agent',
	/**
	 * Ask the server to upgrade to another protocol.
	 * Must not be used in HTTP/2.
	 *
	 * Example: Upgrade: h2c, HTTPS/1.3, IRC/6.9, RTA/x11, websocket
	 */
	Upgrade = 'upgrade',
	/**
	 * Informs the server of proxies through which the request was sent.
	 * Example: Via: 1.0 fred, 1.1 example.com (Apache/1.1)
	 */
	Via = 'via',
	/**
	 * A general warning about possible problems with the entity body.
	 * Example: Warning: 199 Miscellaneous warning
	 */
	Warning = 'warning'
}
export enum NonStandardRequestHeaders {
	/**
	 * Tells a server which (presumably in the middle of a HTTP -&gt; HTTPS migration) hosts mixed content that the client would prefer redirection to HTTPS and can handle Content-Security-Policy: upgrade-insecure-requests
	 * Must not be used with HTTP/2
	 *
	 * Example: Upgrade-Insecure-Requests: 1
	 */
	UpgradeInsecureRequests = 'upgrade-insecure-requests',
	/**
	 * Mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of XMLHttpRequest
	 * Example: X-Requested-With: XMLHttpRequest
	 */
	XRequestedWith = 'x-requested-with',
	/**
	 * Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header field (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this field. On March 7, 2011, a draft proposal was submitted to IETF. The W3C Tracking Protection Working Group is producing a specification.
	 * Example: DNT: 1 (Do Not Track Enabled)
	 * DNT: 0 (Do Not Track Disabled)
	 *
	 */
	DNT = 'dnt',
	/**
	 * A de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. Superseded by Forwarded header.
	 * Example: X-Forwarded-For: client1, proxy1, proxy2
	 * X-Forwarded-For: 129.78.138.66, 129.78.64.103
	 *
	 */
	XForwardedFor = 'x-forwarded-for',
	/**
	 * A de facto standard for identifying the original host requested by the client in the Host HTTP request header, since the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the request. Superseded by Forwarded header.
	 * Example: X-Forwarded-Host: en.wikipedia.org:8080
	 * X-Forwarded-Host: en.wikipedia.org
	 *
	 */
	XForwardedHost = 'x-forwarded-host',
	/**
	 * A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (or a load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An alternative form of the header (X-ProxyUser-Ip) is used by Google clients talking to Google servers. Superseded by Forwarded header.
	 * Example: X-Forwarded-Proto: https
	 */
	XForwardedProto = 'x-forwarded-proto',
	/**
	 * Non-standard header field used by Microsoft applications and load-balancers
	 * Example: Front-End-Https: on
	 */
	FrontEndHttps = 'front-end-https',
	/**
	 * Requests a web application to override the method specified in the request (typically POST) with the method given in the header field (typically PUT or DELETE). This can be used when a user agent or firewall prevents PUT or DELETE methods from being sent directly (note that this is either a bug in the software component, which ought to be fixed, or an intentional configuration, in which case bypassing it may be the wrong thing to do).
	 * Example: X-HTTP-Method-Override: DELETE
	 */
	XHttpMethodOverride = 'x-http-method-override',
	/**
	 * Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&amp;T Devices
	 * Example: X-Att-Deviceid: GT-P7320/P7320XXLPG
	 */
	XATTDeviceId = 'x-att-deviceid',
	/**
	 * Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&amp;T Samsung Galaxy S2.
	 * Example: x-wap-profile: http://wap.samsungmobile.com/uaprof/SGH-I777.xml
	 */
	XWapProfile = 'x-wap-profile',
	/**
	 * Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection field.
	 * Must not be used with HTTP/2.
	 *
	 * Example: Proxy-Connection: keep-alive
	 */
	ProxyConnection = 'proxy-connection',
	/**
	 * Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless; also known as "perma-cookie" or "supercookie"
	 * Example: X-UIDH: ...
	 */
	XUIDH = 'x-uidh',
	/**
	 * Used to prevent cross-site request forgery. Alternative header names are: X-CSRFToken and X-XSRF-TOKEN
	 * Example: X-Csrf-Token: i8XNjC4b8KVok4uw5RftR38Wgp2BFwql
	 */
	XCsrfToken = 'x-csrf-token',
	/**
	 * Correlates HTTP requests between a client and server.
	 * Example: X-Request-ID: f058ebd6-02f7-4d3f-942e-904344e8cde5
	 */
	XRequestID = 'x-request-id',
	/**
	 * Correlates HTTP requests between a client and server.
	 * Example: X-Request-ID: f058ebd6-02f7-4d3f-942e-904344e8cde5
	 */
	XCorrelationID = 'x-correlation-id'
}
export enum StandardResponseHeaders {
	/**
	 * Specifying which web sites can participate in cross-origin resource sharing
	 * Example: Access-Control-Allow-Origin: *
	 */
	AccessControlAllowOrigin = 'access-control-allow-origin',
	/**
	 * Specifying which web sites can participate in cross-origin resource sharing
	 * Example: Access-Control-Allow-Origin: *
	 */
	AccessControlAllowCredentials = 'access-control-allow-credentials',
	/**
	 * Specifying which web sites can participate in cross-origin resource sharing
	 * Example: Access-Control-Allow-Origin: *
	 */
	AccessControlExposeHeaders = 'access-control-expose-headers',
	/**
	 * Specifying which web sites can participate in cross-origin resource sharing
	 * Example: Access-Control-Allow-Origin: *
	 */
	AccessControlMaxAge = 'access-control-max-age',
	/**
	 * Specifying which web sites can participate in cross-origin resource sharing
	 * Example: Access-Control-Allow-Origin: *
	 */
	AccessControlAllowMethods = 'access-control-allow-methods',
	/**
	 * Specifying which web sites can participate in cross-origin resource sharing
	 * Example: Access-Control-Allow-Origin: *
	 */
	AccessControlAllowHeaders = 'access-control-allow-headers',
	/**
	 * Specifies which patch document formats this server supports
	 * Example: Accept-Patch: text/example;charset=utf-8
	 */
	AcceptPatch = 'accept-patch',
	/**
	 * What partial content range types this server supports via byte serving
	 * Example: Accept-Ranges: bytes
	 */
	AcceptRanges = 'accept-ranges',
	/**
	 * The age the object has been in a proxy cache in seconds
	 * Example: Age: 12
	 */
	Age = 'age',
	/**
	 * Valid methods for a specified resource. To be used for a 405 Method not allowed
	 * Example: Allow: GET, HEAD
	 */
	Allow = 'allow',
	/**
	 * A server uses "Alt-Svc" header (meaning Alternative Services) to indicate that its resources can also be accessed at a different network location (host or port) or using a different protocol
	 * When using HTTP/2, servers should instead send an ALTSVC frame.
	 *
	 * Example: Alt-Svc: http/1.1="http2.example.com:8001"; ma=7200
	 */
	AltSvc = 'alt-svc',
	/**
	 * Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds
	 * Example: Cache-Control: max-age=3600
	 */
	CacheControl = 'cache-control',
	/**
	 * Control options for the current connection and list of hop-by-hop response fields.
	 * Must not be used with HTTP/2.
	 *
	 * Example: Connection: close
	 */
	Connection = 'connection',
	/**
	 * An opportunity to raise a "File Download" dialogue box for a known MIME type with binary format or suggest a filename for dynamic content. Quotes are necessary with special characters.
	 * Example: Content-Disposition: attachment; filename="fname.ext"
	 */
	ContentDisposition = 'content-disposition',
	/**
	 * The type of encoding used on the data. See HTTP compression.
	 * Example: Content-Encoding: gzip
	 */
	ContentEncoding = 'content-encoding',
	/**
	 * The natural language or languages of the intended audience for the enclosed content
	 * Example: Content-Language: da
	 */
	ContentLanguage = 'content-language',
	/**
	 * The length of the response body in octets (8-bit bytes)
	 * Example: Content-Length: 348
	 */
	ContentLength = 'content-length',
	/**
	 * An alternate location for the returned data
	 * Example: Content-Location: /index.htm
	 */
	ContentLocation = 'content-location',
	/**
	 * A Base64-encoded binary MD5 sum of the content of the response
	 * Example: Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==
	 */
	ContentMD5 = 'content-md5',
	/**
	 * Where in a full body message this partial message belongs
	 * Example: Content-Range: bytes 21010-47021/47022
	 */
	ContentRange = 'Content-Range',
	/**
	 * The MIME type of this content
	 * Example: Content-Type: text/html; charset=utf-8
	 */
	ContentType = 'content-type',
	/**
	 * The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231)
	 * Example: Date: Tue, 15 Nov 1994 08:12:31 GMT
	 */
	Date = 'date',
	/**
	 * An identifier for a specific version of a resource, often a message digest
	 * Example: ETag: "737060cd8c284d8af7ad3082f209582d"
	 */
	ETag = 'etag',
	/**
	 * Gives the date/time after which the response is considered stale (in "HTTP-date" format as defined by RFC 7231)
	 * Example: Expires: Thu, 01 Dec 1994 16:00:00 GMT
	 */
	Expires = 'expires',
	/**
	 * The last modified date for the requested object (in "HTTP-date" format as defined by RFC 7231)
	 * Example: Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT
	 */
	LastModified = 'last-modified',
	/**
	 * Used to express a typed relationship with another resource, where the relation type is defined by RFC 5988
	 * Example: Link: &lt;/feed&gt;; rel="alternate"
	 */
	Link = 'link',
	/**
	 * Used in redirection, or when a new resource has been created.
	 * Example:
	 *
	 * Example 1: Location: http://www.w3.org/pub/WWW/People.html
	 * Example 2: Location: /pub/WWW/People.html
	 *
	 *
	 */
	Location = 'location',
	/**
	 * This field is supposed to set P3P policy, in the form of P3P:CP="your_compact_policy". However, P3P did not take off, most browsers have never fully implemented it, a lot of websites set this field with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies.
	 * Example: P3P: CP="This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&amp;answer=151657 for more info."
	 */
	P3P = 'p3p',
	/**
	 * Implementation-specific fields that may have various effects anywhere along the request-response chain.
	 * Example: Pragma: no-cache
	 */
	Pragma = 'pragma',
	/**
	 * Request authentication to access the proxy.
	 * Example: Proxy-Authenticate: Basic
	 */
	ProxyAuthenticate = 'proxy-authenticate',
	/**
	 * HTTP Public Key Pinning, announces hash of website's authentic TLS certificate
	 * Example: Public-Key-Pins: max-age=2592000; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g=";
	 */
	PublicKeyPins = 'public-key-pins',
	/**
	 * If an entity is temporarily unavailable, this instructs the client to try again later. Value could be a specified period of time (in seconds) or a HTTP-date.
	 * Example:
	 *
	 * Example 1: Retry-After: 120
	 * Example 2: Retry-After: Fri, 07 Nov 2014 23:59:59 GMT
	 *
	 *
	 */
	RetryAfter = 'retry-after',
	/**
	 * A name for the server
	 * Example: Server: Apache/2.4.1 (Unix)
	 */
	Server = 'server',
	/**
	 * An HTTP cookie
	 * Example: Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1
	 */
	SetCookie = 'set-cookie',
	/**
	 * A HSTS Policy informing the HTTP client how long to cache the HTTPS only policy and whether this applies to subdomains.
	 * Example: Strict-Transport-Security: max-age=16070400; includeSubDomains
	 */
	StrictTransportSecurity = 'strict-transport-security',
	/**
	 * The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer coding.
	 * Example: Trailer: Max-Forwards
	 */
	Trailer = 'trailer',
	/**
	 * The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.
	 * Must not be used with HTTP/2.
	 *
	 * Example: Transfer-Encoding: chunked
	 */
	TransferEncoding = 'transfer-encoding',
	/**
	 * Tracking Status header, value suggested to be sent in response to a DNT(do-not-track), possible values:
	 * "!" — under construction
	 * "?" — dynamic
	 * "G" — gateway to multiple parties
	 * "N" — not tracking
	 * "T" — tracking
	 * "C" — tracking with consent
	 * "P" — tracking only if consented
	 * "D" — disregarding DNT
	 * "U" — updated
	 *
	 * Example: Tk:&nbsp;?
	 */
	Tk = 'tk',
	/**
	 * Ask the client to upgrade to another protocol.
	 * Must not be used in HTTP/2
	 *
	 * Example: Upgrade: h2c, HTTPS/1.3, IRC/6.9, RTA/x11, websocket
	 */
	Upgrade = 'upgrade',
	/**
	 * Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server.
	 * Example:
	 *
	 * Example 1: Vary: *
	 * Example 2: Vary: Accept-Language
	 *
	 *
	 */
	Vary = 'vary',
	/**
	 * Informs the client of proxies through which the response was sent.
	 * Example: Via: 1.0 fred, 1.1 example.com (Apache/1.1)
	 */
	Via = 'via',
	/**
	 * A general warning about possible problems with the entity body.
	 * Example: Warning: 199 Miscellaneous warning
	 */
	Warning = 'warning',
	/**
	 * Indicates the authentication scheme that should be used to access the requested entity.
	 * Example: WWW-Authenticate: Basic
	 */
	WWWAuthenticate = 'www-authenticate',
	/**
	 * Clickjacking protection: deny - no rendering within a frame, sameorigin - no rendering if origin mismatch, allow-from - allow from specified location, allowall - non-standard, allow from any location
	 * Example: X-Frame-Options: deny
	 */
	XFrameOptions = 'x-frame-options'
}
export enum NonStandardResponseHeaders {
	/**
	 * Content Security Policy definition.
	 * Example: X-WebKit-CSP: default-src 'self'
	 */
	ContentSecurityPolicy = 'content-security-policy',
	/**
	 * Content Security Policy definition.
	 * Example: X-WebKit-CSP: default-src 'self'
	 */
	XContentSecurityPolicy = 'x-content-security-policy',
	/**
	 * Content Security Policy definition.
	 * Example: X-WebKit-CSP: default-src 'self'
	 */
	XWebKitCSP = 'x-webkit-csp',
	/**
	 * Used in redirection, or when a new resource has been created. This refresh redirects after 5 seconds. Header extension introduced by Netscape and supported by most web browsers.
	 * Example: Refresh: 5; url=http://www.w3.org/pub/WWW/People.html
	 */
	Refresh = 'refresh',
	/**
	 * CGI header field specifying the status of the HTTP response. Normal HTTP responses use a separate "Status-Line" instead, defined by RFC 7230.
	 * Example: Status: 200 OK
	 */
	Status = 'status',
	/**
	 * The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.
	 * Example: Timing-Allow-Origin: *
	 * Timing-Allow-Origin: &lt;origin&gt;*
	 *
	 */
	TimingAllowOrigin = 'timing-allow-origin',
	/**
	 * Provide the duration of the audio or video in seconds; only supported by Gecko browsers
	 * Example: X-Content-Duration: 42.666
	 */
	XContentDuration = 'x-content-duration',
	/**
	 * The only defined value, "nosniff", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type. This also applies to Google Chrome, when downloading extensions.
	 * Example: X-Content-Type-Options: nosniff
	 */
	XContentTypeOptions = 'x-content-type-options',
	/**
	 * Specifies the technology (e.g. ASP.NET, PHP, JBoss) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)
	 * Example: X-Powered-By: PHP/5.4.0
	 */
	XPoweredBy = 'x-powered-by',
	/**
	 * Correlates HTTP requests between a client and server.
	 * Example: X-Request-ID: f058ebd6-02f7-4d3f-942e-904344e8cde5
	 */
	XRequestID = 'x-request-id',
	/**
	 * Correlates HTTP requests between a client and server.
	 * Example: X-Request-ID: f058ebd6-02f7-4d3f-942e-904344e8cde5
	 */
	XCorrelationID = 'x-correlation-id',
	/**
	 * Recommends the preferred rendering engine (often a backward-compatibility mode) to use to display the content. Also used to activate Chrome Frame in Internet Explorer.
	 * Example: X-UA-Compatible: IE=EmulateIE7
	 * X-UA-Compatible: IE=edge
	 * X-UA-Compatible: Chrome=1
	 */
	XUACompatible = 'x-ua-compatible',
	/**
	 * Cross-site scripting (XSS) filter
	 * Example: X-XSS-Protection: 1; mode=block
	 */
	XXSSProtection = 'x-xss-protection'
}
