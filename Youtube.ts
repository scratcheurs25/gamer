// Ajoutervotre code ici
let whatg
enum Move{
    //% block="avencer"
    Avecer,
    //% block="reculer"
    Reculer,
}
let playerr = game.createSprite(2,3)
playerr.off()
//% icon="#"
namespace Gamer{
    //% block
    export function player(x: number,y:number){
        playerr.setX(x)
        playerr.setY(y)
        playerr.on()
    }
//% block
export function moov(move: Move,num: number){
if(move == 0){
    playerr.change(LedSpriteProperty.X,num)
}else{
    playerr.change(LedSpriteProperty.X,num * -1
    )
}
}
//% block
export function barlaterale(y: number){
    let bar1 = game.createSprite(0,y)
    let bar2 = game.createSprite(1,y)
    let bar3 = game.createSprite(2,y)
    let bar4 = game.createSprite(3,y)
    let bat5 = game.createSprite(4,y)
}
}
