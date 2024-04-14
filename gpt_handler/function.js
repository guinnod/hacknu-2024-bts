const functions = require("@google-cloud/functions-framework");
const axios = require("axios");

functions.http("helloHttp", async (req, res) => {
    // Ensure we're dealing with a POST request
    if (req.method !== "POST") {
        res.status(405).send({
            error: 'Method not allowed, only post method with body {"content": "message"}',
        });
        return;
    }

    try {
        const systemContent = req.body.content.system;
        const userContent = req.body.content.user;

        if (!userContent) {
            res.status(400).send({
                error: "Bad Request",
                message: 'Missing "content" in the request',
            });
            return;
        }

        const postData = {
            model: "gpt-4-turbo",
            response_format: { type: "json_object" },
            messages: [
                { role: "system", content: systemContent },
                { role: "user", content: userContent },
            ],
        };

        const apiKey = process.env.SECRET_KEY;

        const headers = {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        };

        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            postData,
            { headers }
        );

        if (response.status === 200) {
            const assistantMessageJsonString =
                response.data.choices[0].message.content;
            const assistantMessageJson = JSON.parse(assistantMessageJsonString);
            res.status(200).send(assistantMessageJson);
        } else {
            res.status(response.status).send({
                error: "Failed to get response from GPT API",
                status_code: response.status,
            });
        }
    } catch (error) {
        res.status(500).send({
            error: "Internal Server Error",
            message: error.message,
        });
    }
});
