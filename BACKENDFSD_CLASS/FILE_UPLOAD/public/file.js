const fileInput = document.getElementById("file");
const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {

    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a file first!");
        return;
    }

    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch("/upload", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    alert(data.message);
});