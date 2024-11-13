(function(){ 
    console.info("Hello JS"); 
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");
    
    const myNode = document.createElement("div");
    digitalClock.appendChild(myNode);
    
    const updateTime = function(){
        
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit" });
        
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        
        const minutes = myDate.getMinutes();
        const rotMinutes = minutes * 6 - 90;

        let hours = myDate.getHours() + (minutes/60)
        let rotHours = hours * 30 - 90;

        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
        minHand.style.transform = `rotate(${rotMinutes}deg)`;
        hrHand.style.transform = `rotate(${rotHours}deg)`;
        
    }    
    setInterval(updateTime, 1000);
    updateTime();

})();
