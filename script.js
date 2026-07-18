function saveReminder() {

    let plant = document.getElementById("plant").value;
    let time = document.getElementById("time").value;

    if (plant == "" || time == "") {
        alert("Please enter plant name and time");
        return;
    }

    let list = document.getElementById("plantList");

    let li = document.createElement("li");

    li.innerHTML = `
🌱 ${plant} - 💧 ${time}
<button onclick="deleteReminder(this)">Delete</button>
`;

    list.appendChild(li);

    document.getElementById("plant").value = "";
    document.getElementById("time").value = "";

    alert("Reminder Saved Successfully!");
}
function deleteReminder(button){
    button.parentElement.remove();
}
function showTime() {
    let now = new Date();
    document.getElementById("clock").innerHTML =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(showTime, 1000);

