// Notification Permission
if ("Notification" in window) {
    Notification.requestPermission();
    const alarm = new Audio("alarm.mp3");
}

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

    // Notification Time Check
    let now = new Date();
    let reminderTime = new Date();

    let parts = time.split(":");
    reminderTime.setHours(parts[0]);
    reminderTime.setMinutes(parts[1]);
    reminderTime.setSeconds(0);

    let delay = reminderTime - now;

    if (delay > 0) {
        setTimeout(() => {
            alarm.play();
                alert("🌱 Time to water " + plant + " 💧");
            }
        }, delay);
    }

    document.getElementById("plant").value = "";
    document.getElementById("time").value = "";

    alert("Reminder Saved Successfully!");
}

function deleteReminder(button) {
    button.parentElement.remove();
}

function showTime() {
    let now = new Date();
    document.getElementById("clock").innerHTML =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(showTime, 1000);

