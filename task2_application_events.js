const EventEmitter = require("events");

// Create EventEmitter object named application
const application = new EventEmitter();

// Input event
application.on("input", (text) => {
    console.log(`Entered text: ${text}`);
});

// Button click event
application.on("buttonClick", () => {
    console.log("Button clicked successfully.");
});

// Form submit event
application.on("formSubmit", () => {
    console.log("Form submitted successfully.");
});

// Challenge event: notification
application.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Trigger all events
application.emit("input", "Hello Node.js");
application.emit("buttonClick");
application.emit("formSubmit");
application.emit("notification", "Your form has been received.");