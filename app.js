const log = console.log

function makeAdjective(adjective) {
    return function(noun) {
        log(`${adjective} ${noun}`)
    }
}

const awesomifier = makeAdjective("nice")
awesomifier("meme")