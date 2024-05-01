function matches(victory, defeat) {
    let result = victory - defeat
    return result
}

function rank() {
    let resultRank = matches(50, 20)
    let level = ""
    if (resultRank <= 10) {
    level = "Iron"
    } else if (resultRank <= 20) {
    level = "Bronze"
    } else if (resultRank <= 50) {
    level = "Silver"
    } else if (resultRank <= 80) {
    level = "Gold"
    } else if (resultRank <= 90) {
    level = "Diamond"
    } else if (resultRank <= 100) {
    level = "Legendary"
    } else if (resultRank >= 100) {
    level = "Immortal"
    }
    return `The Hero has a balance of ${resultRank} and is at the level of ${level}`
}

console.log(rank())