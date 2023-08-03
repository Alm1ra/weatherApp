async function getapi(url) {
    try {
        const response = await fetch(url);
        var data = await response.json();
        console.log(data.fact);
    }
    catch(err) {
        console.log(err)
    }
}

getapi('https://catfact.ninja/fact');