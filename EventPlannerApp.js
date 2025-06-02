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
    },

    registerAttendee(eventName, attendeeName){
          const event = this.events.find(ev =>ev.name === eventName);
          if(!event){
               console.log(`Events ${this.name} not found.`)
          }
    }, 

    listEvent(event){
    }
};