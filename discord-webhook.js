const data = {
    "username": process.env.user_name,
    "avatar_url": process.env.avatar_url,
    "content": process.env.content,
    "embeds": [
        {
            "author": {
                "name": process.env.author,
                "url": process.env.authorurl,
        },
        "image": {
            "url": process.env.imageurl,
        },
        "title": process.env.title,
        "color": process.env.embedcolor,
        "description": process.env.description.replaceAll('\\n', '\n'),
        "fields": [
            {
                "name": "Game",
                "value": process.env.game,
            },
            {
                "name": "Stream title",
                "value": process.env.stream_title,
            },
            {
                "name": "Stream description",
                "value": process.env.stream_description,
            }
        ]
    }
    ]
};

const url = process.env.webhook_url;
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(response => {
    // Send the response code to %output%
    console.log(response.status);
});