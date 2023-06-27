
const app = function() {
    const textArea = document.getElementById("textArea");
    const toUpperCaseBtn = document.getElementById("upper-case")
    const toLowerCastBtn = document.getElementById("lower-case");
    const toProperCaseBtn = document.getElementById("proper-case");
    const toSentenceCaseBtn = document.getElementById("sentence-case");
    const saveTextFileBtn = document.getElementById("save-text-file");

    toUpperCaseBtn.addEventListener("click", toUpperCaseForInput);
    toLowerCastBtn.addEventListener("click", toLowerCaseForInput);
    toProperCaseBtn.addEventListener("click", toProperCaseForInput);
    toSentenceCaseBtn.addEventListener("click", toSentenceCaseForInput);
    saveTextFileBtn.addEventListener("click",saveInputToTextFile);

    function toUpperCaseForInput() {
        textArea.value = textArea.value.toUpperCase();
    }

    function toLowerCaseForInput() {
        textArea.value = textArea.value.toLowerCase();
    }

    function toProperCaseForInput() {
        textArea.value = handleText("proper", textArea.value);
    }

    function toSentenceCaseForInput() {
        textArea.value = handleText("sentence", textArea.value);
    }

    function saveInputToTextFile() {
        download("text.txt",textArea.value);
    }

    function handleText(type, text) {
        let words = undefined;

        switch (type) {
            case "proper":
                words = text.split(' ');
                setFirstCharCapital(words);
                return words.join(' ');

            case "sentence":
                words = text.split(". ");
                setFirstCharCapital(words);
                return words.join(". ");
        }
    }

    function setFirstCharCapital(arr) {
        for (let idx in arr) {
            arr[idx] = arr[idx][0] === undefined ?
                "" + arr[idx] : arr[idx][0].toUpperCase() + arr[idx].slice(1).toLowerCase();
        }
    }

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

// Start file download.
//     download("hello.txt","This is the content of my file :)");
}

document.addEventListener("DOMContentLoaded", app);
