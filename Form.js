class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(150,50);
        var n = createInput("name");
        var b = createButton("play");
        var c = createElement("h3");
        n.position(200,50);
        b.position(200,80);
        b.mousePressed(function(){
            n.hide();
            b.hide();
            var name = n.value();
            playerCount +=1;
            player.update(name)
            player.updateCount(playerCount)
            c.html("hello"+name)
            c.position(200,100);
        });
    }
}