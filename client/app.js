async function fetchGreeting() {
    const response = await fetch('http://localhost:9000/', {
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            query:'query { greetings }'
        }),
    })

    const { data } = await response.json();
    // console.log("bodyy", body);
    return data.greetings;
}

fetchGreeting().then((greetings) => {
    document.getElementById('greetingsID').textContent = greetings;
})