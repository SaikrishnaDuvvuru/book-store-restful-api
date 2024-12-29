# book-store-restful-api
Book store restful API with JWT authorization.



Principles of REStFUL API:

Statelessness: 
No session state between requests.

Client-Server Architecture: 
Separate concerns between client and server.

Uniform Interface: 
Standardized communication using HTTP methods and conventions.

Resource-Based: 
Everything is a resource, identified by URLs.

Representation: 
Clients interact with representations of resources.

Stateless Communication: 
Each request is independent and self-contained.

Versioning:
API has versions to differentiate between latest and old API's.

Cacheability: 
Responses can be cached for performance optimization.

Layered System: 
Supports intermediary layers like caching and load balancing.

Code on Demand (Optional):
Servers can provide code to clients (e.g., JavaScript).

Idempotency: Some methods should have the same effect even when called multiple times.

Discoverability: APIs should provide information to discover other resources and actions.


-------------------------------------------------------------------------------------------------------------------


JWT (JSON Web Token) and Session-based Authentication are two different methods for managing user authentication:

JWT Authentication:

Stateless: The server does not store any session data. Authentication information is stored within the token itself.
Token: A signed token (JWT) is sent with each request (usually in the header).
Scalability: More suitable for distributed systems as it doesn't require session storage on the server.
Security: If a JWT is stolen, it remains valid until it expires.


Session Authentication:

Stateful: The server stores session information (usually in memory or a database) for each logged-in user.
Session ID: A session ID is stored in a cookie, and the server verifies the session on each request.
Scalability: Can be more challenging in distributed systems due to session management across multiple servers.
Security: Session IDs can be invalidated server-side at any time (e.g., logout or timeout).
In short: JWT is stateless and doesn't require server-side storage, while Session authentication is stateful and relies on server-side session storage.





