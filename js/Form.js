
class Form{
    constructor(){}
    display(){
        var title=createElement("h2")
        title.html("CAR RACING GAME!")
        title.position(450,100)

        var input=createInput("NAME")
        input.position(500,240)


        var button =createButton("Play")
        button.position(600,320)

        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            var greeting=createElement("h3")
            greeting.html("Hi "+ name)
            greeting.position(500,220)
        })
    }
}