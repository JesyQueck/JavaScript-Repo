//"ADOPT A PET 🐶🐱"  VIRTUAL GAME

let petStatus = {
     name: "",
     energy: 50,
     happiness: 50,
     hunger: 50,
     isSick: false,


     eat(){
          this.energy +=10;
          this.hunger -=15;
          this.happiness +=5;

          console.log(`Yum! That was tasty.`);
     },
     play(){
          this.energy -=20;
          this.hunger +=15;
          this.happiness +=10;

          if(this.energy < 10){
               console.log(`I'am too tired to play!`);
          }
     },
     sleep(){
          this.energy +=30;
          this.hunger -=5;
          console.log(`Zzz... That was a good nap!`);
     },
     checkStatus(){
          console.log(`Name: ${this.name} Energy: ${this.energy} Happiness: ${this.happiness} Hunger: ${this.hunger} Is ${this.name} Sick: ${this.isSick}`);
     },
     getSick(){
          this.isSick = true;
          this.happiness -=20;
          this.energy -=20;
          console.log(`Oh no! Am not feeling well 😷`);
     },
     visitVet(){
          if(this.isSick === true){
               this.isSick = false;
               this.happiness +=10;
               console.log(`Feeling Better Already, thanks Doc!`)
          }else{
               console.log(`I'm fine, No need for a Doctor`)
          }

     },
     
     petStimulationBobo(){
          this.name = "Bobo";
          this.checkStatus();
          for(let i = 0; i > 2; i++){
               this.play
          };
          this.eat();
          this.sleep();
          this.checkStatus();
          this.visitVet(this.getSick);
          this.checkStatus();
     },
     petStimulationJill(){
          this.name = "Jill";
          this.checkStatus();
          for(let i = 0; i > 2; i++){
               this.play
          };
          for(let i = 0; i >2; i ++){
          this.eat();               
          }
          this.sleep();
          this.checkStatus();
          this.visitVet(this.getSick);
          this.checkStatus();
     },
     petStimulationLayla(){
          this.name = "Layla";
          this.checkStatus();
          for(let i = 0; i > 2; i++){
               this.play
          };
          this.eat();
          for(let i = 0; i>2; i++){
          this.sleep();               
          }
          this.checkStatus();
          this.visitVet(this.getSick);
          this.checkStatus();
     }
};
petStatus.petStimulationBobo();
petStatus.petStimulationJill();
petStatus.petStimulationLayla();