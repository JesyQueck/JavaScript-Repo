let eventPlanner = {
     events:  [], 
     addEvent (name, date, capacity, ){
          const event = {
               name: name,
               date: date,
               capacity: capacity,
               attendees:[],
          }
     addAttendee(attendeeName){
          if(attendeeName < this.capacity){
               this.attendees.push(attendeeName);
               return true;
          }else{
               console.log(`Sorry! This`)
          }
     }
     }
}