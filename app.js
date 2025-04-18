const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

//? For the operation of the closing button and open the Sidebar
function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  Array.from(sidebar.getElementsByClassName("show")).forEach((element) => {
    element.classList.remove("show");
    element.previousElementSibling.classList.remove("rotate");
  });

  // if (sidebar.classList.contains("close")) {
  //   Array.from(sidebar.getElementsByTagName("li")).forEach((element) => {
  //     element.style.display = "flex";
  //     element.style.justifyContent = "center";
  //   });
  // }
}

//? For the dropdown buttons functionality
function toggleSubMenu(htmlElement) {
  htmlElement.nextElementSibling.classList.toggle("show");
  htmlElement.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.remove("close");
    toggleButton.classList.remove("rotate");
  }
}
