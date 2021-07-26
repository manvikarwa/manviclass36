class Player{
    constructor(){

    }

    getCount(){
        var pcRef = database.ref("playerCount");
        pcRef.on("value",function(data){playerCount = data.val ()})
          
    }

    updateCount(count){
        database.ref("/").update({playerCount : count});
    }

    update(name){
        var i = "player"+playerCount
        database.ref(i).set({name : name});
    }
}