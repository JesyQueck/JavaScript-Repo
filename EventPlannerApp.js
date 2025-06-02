let eventPlanner = {
    events: [],

    addEvent(name, date, capacity) {
        const event = {
            name: name,
            date: date,
            capacity: capacity,
            attendees: [],

            addAttendee(attendeeName) {
                if (this.attendees.length < this.capacity) {
                    this.attendees.push(attendeeName);
                    return true;
                } else {
                    console.log(`Sorry! The event "${this.name}" is full.`);
                    return false;
                }
            }
        };

        this.events.push(event);
    }
};