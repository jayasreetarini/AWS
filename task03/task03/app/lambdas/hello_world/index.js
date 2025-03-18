exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2)); // Debugging log

    const path = event.rawPath || event.path || "/"; // Check both rawPath and path
    const method = event.requestContext?.http?.method || event.httpMethod || "UNKNOWN";

    if (path === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                message: "Hello from Lambda"
            }),
            headers: {
                "content-type": "application/json"
            },
            isBase64Encoded: false
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
            }),
            headers: {
                "content-type": "application/json"
            },
            isBase64Encoded: false
        };
    }
};
