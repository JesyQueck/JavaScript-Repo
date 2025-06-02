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
               return;
          }
          event.addAttendee(attendeeName)
    }, 

     listAttendees(eventName) {
       const event = this.events.find(ev => ev.name === eventName);
       if (!event) {
         console.log(`Event "${eventName}" not found.`);
         return;
       }
       console.log(`Attendees for "${eventName}":`);
       event.attendees.forEach((attendee, index) => {
         console.log(`${index + 1}. ${attendee}`);
       });
     },

     summary() {
          this.events.forEach(event => {
          console.log(`Event: ${event.name} | Date: ${event.date} | Attendees: ${event.attendees.length}/${event.capacity}`);
     });
  }
};


eventPlanner.addEvent("Hackathon", "2025-07-01", 100);
eventPlanner.addEvent("CSS meet", "2025-08-15", 50);

eventPlanner.registerAttendee("Hackathon", "Deo");
eventPlanner.registerAttendee("Hackathon", "Jesse");

eventPlanner.registerAttendee("CSS meet", "Zara");

eventPlanner.listAttendees("Hackathon");

eventPlanner.summary();