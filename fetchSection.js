// Get the script that is inside the section you want to load
const sectionScripts = document.querySelectorAll('section > script')
let sectionScript = '';
sectionScripts.forEach(script => {
    if(script.dataset.id == script.parentElement.id) {
        sectionScript = script;
    }
})

// Load the section with the content of the corresponding component
sectionId = sectionScript.parentElement.id;
component = sectionScript.dataset.component;
fetch(component)
  .then((response) => response.text())
  .then((html) => {
    document.getElementById(sectionId).innerHTML = html;
  })
  .catch((error) => console.error("Error loading component:", error));
