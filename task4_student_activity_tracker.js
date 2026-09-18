const EventEmitter = require("events");

// Create EventEmitter object
const studentTracker = new EventEmitter();

// Login event
studentTracker.on("login", (studentName) => {
    console.log(`${studentName} logged in successfully.`);
});

// Course registration event
studentTracker.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});

// Notification event
studentTracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Logout event
studentTracker.on("logout", (studentName) => {
    console.log(`${studentName} logged out successfully.`);
});

// Trigger the events
studentTracker.emit("login", "Rahul");
studentTracker.emit("courseRegistration", "Full Stack Development");
studentTracker.emit("notification", "Your course registration is confirmed.");
studentTracker.emit("logout", "Rahul");