const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDate = new Date();
let events = JSON.parse(localStorage.getItem("events")) || [];

// DOM elements
const dateEl = document.getElementById("date");
const dayEl = document.getElementById("day");
const monthEl = document.getElementById("month");
const yearEl = document.getElementById("year");
const timeEl = document.getElementById("time");
const toggleThemeBtn = document.getElementById("toggleTheme");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const eventInput = document.getElementById("eventInput");
const addEventBtn = document.getElementById("addEventBtn");
const eventsList = document.getElementById("eventsList");

// Display current date
function displayDate() {
  const date = currentDate.getDate();
  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  dateEl.textContent = date < 10 ? "0" + date : date;
  dayEl.textContent = day;
  monthEl.textContent = month;
  yearEl.textContent = year;
}

function displayTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  minutes = minutes < 10 ? "0" + minutes : minutes;
  timeEl.textContent = `${hours}:${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  } ${ampm}`;
}

// Toggle dark/light theme
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Add Event to the list
addEventBtn.addEventListener("click", () => {
  const eventText = eventInput.value.trim();
  if (eventText) {
    events.push({ date: currentDate.toDateString(), event: eventText });
    eventInput.value = "";
    updateEventList();
    localStorage.setItem("events", JSON.stringify(events));
  }
});

// Display events
function updateEventList() {
  eventsList.innerHTML = "";
  const filteredEvents = events.filter(
    (e) => e.date === currentDate.toDateString()
  );
  filteredEvents.forEach((e, index) => {
    const li = document.createElement("li");
    li.textContent = `${e.event}`;
    eventsList.appendChild(li);
  });
}

// Navigation between months
prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  displayDate();
  updateEventList();
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  displayDate();
  updateEventList();
});

// Update clock every second
setInterval(displayTime, 1000);

// Initial call to display the date and events
displayDate();
displayTime();
updateEventList();
