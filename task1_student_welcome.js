const EventEmitter = require("events");

// Create EventEmitter object
const studentEvents = new EventEmitter();

// Event for student joining
studentEvents.on("studentJoined", (studentName) => {
    console.log(`Student ${studentName} joined the session.`);
});

// Event for course selection
studentEvents.on("courseSelected", (courseName) => {
    console.log(`Course selected: ${courseName}`);
});

// Event for session ending
studentEvents.on("sessionEnded", (sessionCode) => {
    console.log(`Session ended. Code: ${sessionCode}`);
});

// Trigger the events
studentEvents.emit("studentJoined", "Rahul");
studentEvents.emit("courseSelected", "Full Stack Development");
studentEvents.emit("sessionEnded", 0);