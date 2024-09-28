Suvam's Enhanced Mini Calendar App
This project is a mini calendar web application that displays the current date, day, month, and time. It includes a variety of interactive features such as month navigation, light/dark mode toggle, and event management.

Features

1. Display Current Date, Day, and Time
   The application shows the current date, day of the week, and time in real-time.
   The date and time update dynamically on the page.

2. Light/Dark Mode Toggle
   The application provides a toggle button in the top-right corner to switch between light and dark themes.

The button uses JavaScript to switch the entire interface between these two modes.

html

```Copy code
<button id="toggleTheme">Toggle Light/Dark Mode</button>
```

Light mode: White background with dark text.

Dark mode: Dark background with light text.

3. Month Navigation
   Users can navigate between months using the Previous Month and Next Month buttons:

html

```Copy code
<button id="prevMonth">Previous Month</button>
<button id="nextMonth">Next Month</button>
```

4. Event Management
   Users can add events by typing an event description into the input field and clicking the Add Event button.

html

```Copy code
<input type="text" id="eventInput" placeholder="Add Event" />
<button id="addEventBtn">Add Event</button>
```

Added events will appear in a list under the calendar.

Events are stored in the browser's local storage, so they persist across page refreshes.

5. Hover Effect on Calendar
   The calendar scales up slightly when hovered over, providing a dynamic and interactive feel.

css

```Copy code
.calendar:hover {
  transform: scale(1.05);
}
```

6. Responsive Design
   The layout adjusts for different screen sizes, ensuring that the calendar app looks great on both desktop and mobile devices.


# index.html
Contains the structure of the mini calendar, including the calendar display, controls for month navigation, and an input field for adding events.

# style.css
Defines the styling for the calendar, theme toggle, and event list. Key features include:

Light and dark themes.
Hover effects on the calendar and buttons.
Responsive layout for different screen sizes.
#  script.js
Implements the logic for:

Real-time date, day, and time display.
Light/dark mode switching.
Month navigation.
Event management (adding and saving events).


## Technologies Used

- HTML
- CSS
- JavaScript

# License

This project is licensed under the MIT License.


### SUVAM MOHAPATRA