async function translateText() {

    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    const response = await fetch(
        "https://libretranslate.de/translate",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: text,
                source: source,
                target: target,
                format: "text"
            })
        }
    );

    const data = await response.json();

    document.getElementById("outputText").value =
        data.translatedText;
}

function copyText() {

    const output =
        document.getElementById("outputText");

    output.select();
    document.execCommand("copy");

    alert("Copied Successfully!");
}