// Get the file input and the container where files will be displayed
const fileUploadInput = document.getElementById("fileUpload");
const allFilesContainer = document.querySelector(".allFiles");

// Initial file list (only showing 8 items)
let allFiles = [
    "Materials Selection Guidelines.pdf", 
    "Emergency Shutdown OnOff valves Spec.pdf", 
    "shell and Tube Heat Exchanger Specification.pdf",
    "file1.pdf"
];

// On load - display initial files
window.onload = function() {
    renderFiles();
};

// Event listener for file selection
fileUploadInput.addEventListener("change", handleFileSelection);

function handleFileSelection(event) {
    const files = event.target.files;

    if (files.length > 0) {
        const newFileName = files[0].name;

        // Add new file to the beginning and limit to 8 files
        allFiles.unshift(newFileName);
        if (allFiles.length > 8) {
            allFiles.pop();  // Remove the oldest file to keep the list at 8
        }

        renderFiles(); // Re-render the file list
    }
}

// Function to render the file list (ensuring only 8 items)
function renderFiles() {
    allFilesContainer.innerHTML = "";  // Clear current content
    let fileID = allFiles.length;  // Use dynamic file IDs

    allFiles.forEach(fileName => {
        let eachFile = document.createElement("input");
        eachFile.type = "radio";
        eachFile.id = fileName + fileID;
        eachFile.name = "All_Files";
        eachFile.classList.add("filesRadio");

        let fileLabel = document.createElement("label");
        fileLabel.innerHTML = fileName;
        fileLabel.htmlFor = eachFile.id;
        fileLabel.classList.add("filesLabel");

        allFilesContainer.appendChild(eachFile);
        allFilesContainer.appendChild(fileLabel);

        // Add event listener for file selection
        eachFile.addEventListener("change", function() {
            if (fileName === "Emergency Shutdown OnOff valves Spec.pdf") {
                fetchFileData();
            }
        });

        fileID--;  // Decrement fileID for uniqueness
    });
}


