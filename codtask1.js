async function translateText() {
    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    try {
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
        );

        const data = await response.json();

        document.getElementById("outputText").value =
            data.responseData.translatedText;

    } catch (error) {
        console.error(error);
        alert("Translation failed.");
    }
}

function copyText() {

    const output =
        document.getElementById("outputText");

    output.select();
    document.execCommand("copy");

    alert("Copied Successfully!");
}