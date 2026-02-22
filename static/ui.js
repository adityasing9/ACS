const socket = io();
const box = document.getElementById("messages");
const input = document.getElementById("text");
const meBox = document.getElementById("me");

let me = "";

socket.on("identity", name => {
    me = name;
    meBox.innerText = "You are: " + name;
    add(`You are now known as ${name}`, "system");
});

socket.on("system", msg => add(msg, "system"));
socket.on("message", msg => add(msg, "msg"));

function send() {
    const text = input.value.trim();
    if (!text) return;
    socket.emit("message", `${me}: ${text}`);
    input.value = "";
}

function changeName() {
    const newName = document.getElementById("newname").value.trim();
    if (!newName) return;
    socket.emit("change_name", newName);
    document.getElementById("newname").value = "";
}

input.addEventListener("keydown", e => {
    if (e.key === "Enter") send();
});

function add(text, cls) {
    const d = document.createElement("div");

    if (cls === "msg") {
        if (text.startsWith(me + ":")) {
            d.className = "msg me";
        } else {
            d.className = "msg other";
        }
    } else {
        d.className = cls;
    }

    d.innerText = text;
    box.appendChild(d);
    d.scrollIntoView();
}