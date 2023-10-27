const button = document.createElement("button");
button.innerHTML = "Click me";
button.addEventListener("click", () => {
    window.alert("Hello World");
});
document.body.appendChild(button);