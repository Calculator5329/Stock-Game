let mouseX = 1
let mouseY = 1
function printMousePos(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}

document.addEventListener("click", printMousePos);


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d')

const GAME_WIDTH = 2000;
const GAME_HEIGHT = 900;



import {
    drawText, drawLine, Stroke_Rect, rect, rounded_rect, circle, flipCoin, randNum, randInt, pickNum, makeArc, listAverage, listMax, Value_In_Rect,
    Default_Text, Paragraph_Text, amount_of_x_in_list, round_dollar, round_dollar_double, randomRevGrowth, randomMargin, variance10, variance25,
    makeCompany, displayCompany, getStandardDeviation, testMarginGrowth, listRoundDollar, generatePrices, chart, listMin, updateCompany, mergeLists, intList, listSection, separator
} from './functions.js'

function makeButton(x, y, a, b) {
    if (mouseX > x && mouseY > y) {
        if (mouseX < a && mouseY < b) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

function listSum(list) {
    let sum = 0
    for (i in list) {
        sum += i
    }
    return sum
}

let Default_Font = "40px Times New Roman"
let Default_Color = "Black"

let currentNames = [""]
let firstCompany = makeCompany(currentNames)
let secondCompany = makeCompany(currentNames)
let thirdCompany = makeCompany(currentNames)
let fourthCompany = makeCompany(currentNames)
let reveal = false
let guess = 0
let CagrList = [firstCompany[11], secondCompany[11], thirdCompany[11], fourthCompany[11]]
//console.log(firstCompany)
let companiesList = [firstCompany, secondCompany, thirdCompany, fourthCompany]
let maxCagr = companiesList[CagrList.indexOf(listMax(CagrList))][0]

let averageCagr = listAverage(CagrList)

let companyXList = [0, 480, 960, 1440]
let companyYList = [5, 5, 5, 5]

let holdings = [[], [], [], []]
let money = 1000
let moneyList = []
let portfolioValue = 0

//let avgMoney = 1000
let avgHoldings = [[], [], [], []]
let avgPortfolioValue = 0
let avgMoneyList = []
let avgPortfolioMultipliers = []

let bestPeformer = 0

//Average price, total shares, closed gains
let playerStats = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]

let i = 0

let testList = []
let xtestList = []

let started = false

let day = 0
let daySpeed = 20
let dayCycle = 0 

//Somethings bugged here

//Old Code


let companyPriceLists = [generatePrices(firstCompany[12][0], firstCompany[12][0] * (Math.pow(1 + CagrList[0] / 100, 10))),
generatePrices(secondCompany[12][0], secondCompany[12][0] * (Math.pow(1 + CagrList[1] / 100, 10))),
generatePrices(thirdCompany[12][0], thirdCompany[12][0] * (Math.pow(1 + CagrList[2] / 100, 10))),
generatePrices(fourthCompany[12][0], fourthCompany[12][0] * (Math.pow(1 + CagrList[3] / 100, 10)))]


console.log("First Price: " + firstCompany[12][0])
console.log("Last Price: " + companyPriceLists[0][1][companyPriceLists[0][1].length -1])

console.log(firstCompany[12][firstCompany[12].length - 6])

//Bug Fix




//console.log("Generated Prices: " + companyPriceLists[0])

//let companyPriceLists = [generatePrices(firstCompany[1], firstCompany[1] * (Math.pow(1 + CagrList[0] / 100, 5))),
//generatePrices(secondCompany[1], secondCompany[1] * (Math.pow(1 + CagrList[1] / 100, 5))),
//generatePrices(thirdCompany[1], thirdCompany[1] * (Math.pow(1 + CagrList[2] / 100, 5))),
//generatePrices(fourthCompany[1], fourthCompany[1] * (Math.pow(1 + CagrList[3] / 100, 5)))]

testList = generatePrices(firstCompany[1], firstCompany[1] * (Math.pow(1 + CagrList[0] / 100, 5)))

while (i < testList[0].length) {
    xtestList.push(i)
    i += 1
}

i = 0



function main() {
    ctx.clearRect(0, 0, 2000, 2000)

    if (dayCycle > daySpeed) {
        dayCycle = 0
        day += 2
        daySpeed = 5
    }

    if(started) {
        dayCycle += 1
    }

    if(makeButton(50, 600, 150, 660)) {
        started = true
    }

    rounded_rect(50, 600, 100, 60, "#65CCFF")
    drawText("Start", 75, 635, "black", "20px  Arial")

    if (day % 1250 == 0) {
        firstCompany = updateCompany(firstCompany)
        secondCompany = updateCompany(secondCompany)
        thirdCompany = updateCompany(thirdCompany)
        fourthCompany = updateCompany(fourthCompany)

        //console.log(secondCompany[6])
        companyPriceLists[0][1] = mergeLists(companyPriceLists[0][1], generatePrices(companyPriceLists[0][1][companyPriceLists[0][1].length -1], firstCompany[12][firstCompany[12].length - 1], 5)[1])

        //console.log(generatePrices(firstCompany[12][firstCompany[12].length - 6], firstCompany[12][firstCompany[12].length-1], 5)[1])
        //console.log(firstCompany[12])
        companyPriceLists[1][1] = mergeLists(companyPriceLists[1][1], generatePrices(companyPriceLists[1][1][companyPriceLists[1][1].length -1], secondCompany[12][secondCompany[12].length - 1], 5)[1])
        companyPriceLists[2][1] = mergeLists(companyPriceLists[2][1], generatePrices(companyPriceLists[2][1][companyPriceLists[2][1].length -1], thirdCompany[12][thirdCompany[12].length - 1], 5)[1])
        companyPriceLists[3][1] = mergeLists(companyPriceLists[3][1], generatePrices(companyPriceLists[3][1][companyPriceLists[3][1].length -1], fourthCompany[12][fourthCompany[12].length - 1], 5)[1])
        //companyPriceLists[i]
        //firstCompany[12]

        //console.log(firstCompany[6][Math.round(day/1250) * 6])

    }

    while(i < 4) {
        if(holdings[i].length > 0) {
            playerStats[i][0] = round_dollar(listAverage(holdings[i]))
            playerStats[i][1] = 0
            for(let j = 0; j < holdings[i].length; j++) {
                playerStats[i][1] += 100/holdings[i][j]
            }
        }  
        else {
            playerStats[i][0] = 0
            playerStats[i][1] = 0
        } 
        i += 1
    }

    i = 0

    //console.log(secondCompany[6].length)
    //console.log("Day: " + day + "length: " + companyPriceLists[0][1].length)

    //console.log(mergeLists([0, 1, 2], [3, 4, 5]))
    //console.log(mergeLists([0, 1, 2], [3, 4, 5]).length)

    //console.log(companyPriceLists[0][1][day])

    //console.log(Math.pow(firstCompany[6][firstCompany[6].length-1]/firstCompany[6][0], 1/firstCompany[6].length) - 1)

    firstCompany[1] = companyPriceLists[0][1][day+1250]
    console.log("First company last price " + companyPriceLists[0][1][day+1250])
    secondCompany[1] = companyPriceLists[1][1][day+1250]
    thirdCompany[1] = companyPriceLists[2][1][day+1250]
    fourthCompany[1] = companyPriceLists[3][1][day+1250]

    //chart(800, 700, xtestList, testList[0])
    //chart(245, 120, xtestList, testList[1], 120, 60)

    displayCompany(firstCompany, companyXList[0], companyYList[0], day, listSection(companyPriceLists[0][1], day, day + 1250), playerStats[0])
    displayCompany(secondCompany, companyXList[1], companyYList[1], day,listSection(companyPriceLists[1][1], day, day + 1250), playerStats[1])
    displayCompany(thirdCompany, companyXList[2], companyYList[2], day, listSection(companyPriceLists[2][1], day, day + 1250), playerStats[2])
    displayCompany(fourthCompany, companyXList[3], companyYList[3], day, listSection(companyPriceLists[3][1], day, day + 1250), playerStats[3])

    while (i < companyXList.length) {
        rounded_rect(companyXList[i] + 30, companyYList[i] + 380, 100, 75, "#42ff4cbc")
        drawText("Buy $100", companyXList[i] + 33, companyYList[i] + 422, "black", "22px Times New Roman")

        rounded_rect(companyXList[i] + 30, companyYList[i] + 460, 100, 50, "#42ff4c")
        drawText("Buy $1000", companyXList[i] + 33, companyYList[i] + 492, "black", "22px Times New Roman")


        rounded_rect(companyXList[i] + 285, companyYList[i] + 380, 100, 75, "#ff7142bc")
        drawText("Sell $100", companyXList[i] + 288, companyYList[i] + 422, "black", "22px Times New Roman")

        rounded_rect(companyXList[i] + 285, companyYList[i] + 460, 100, 50, "#ff7142")
        drawText("Sell $1000", companyXList[i] + 288, companyYList[i] + 492, "black", "22px Times New Roman")

        i++
    }

    i = 0

    while (i < 4) {

        if (makeButton(companyXList[i] + 30, companyYList[i] + 380, companyXList[i] + 130, companyYList[i] + 455)) {
            if (money >= 100) {
                holdings[i].push(companyPriceLists[i][1][day+1250])
                money -= 100
            }
        }

        if (makeButton(companyXList[i] + 285, companyYList[i] + 380, companyXList[i] + 385, companyYList[i] + 455)) {
            if (holdings[i].length > 0) {
                playerStats[i][2] += round_dollar(companyPriceLists[i][1][day+1250] - holdings[i][0])
                money += 100/holdings[i][0] * companyPriceLists[i][1][day+1250]
                holdings[i].shift()

            }
        }

        if (makeButton(companyXList[i] + 285, companyYList[i] + 460, companyXList[i] + 385, companyYList[i] + 510)) {
            if (holdings[i].length > 9) {
                playerStats[i][2] += round_dollar(companyPriceLists[i][1][day+1250] - holdings[i][0])
                money += 1000/holdings[i][0] * companyPriceLists[i][1][day+1250]
                for(let j = 0; j < 10; j++) {
                    holdings[i].shift()
                }               
            }
            
        }

        if (makeButton(companyXList[i] + 30, companyYList[i] + 460, companyXList[i] + 130, companyYList[i] + 510)) {
            if (money >= 1000) {
                for(let j = 0; j < 10; j++) {
                    holdings[i].push(companyPriceLists[i][1][day+1250])
                }
                money -= 1000
            }
            
        }
        i += 1
    }

    i = 0

    //Buying the stocks for the average return portfolio

    /*
    while (i < 4) {
        if (avgMoney > companyPriceLists[i][1][day+1250]) {
            avgHoldings[i].push(companyPriceLists[i][1][day+1250])
            avgMoney -= companyPriceLists[i][1][day+1250]
        }

        i += 1
    }

    i = 0
    */

    //Calculating average return portfolio value

    while(i < 4) {
        if(holdings[i].length > 0) {
            playerStats[i][0] = round_dollar(listAverage(holdings[i]))
            playerStats[i][1] = 0
            for(let j = 0; j < holdings[i].length; j++) {
                playerStats[i][1] += 100/holdings[i][j]
            }
        }  
        else {
            playerStats[i][0] = 0
            playerStats[i][1] = 0
        } 
        i += 1
    }

    i = 0

    avgPortfolioMultipliers = [250/companyPriceLists[0][1][1250], 250/companyPriceLists[1][1][1250], 250/companyPriceLists[2][1][1250], 250/companyPriceLists[3][1][1250]]

    avgPortfolioValue = 0
    

    while (i < 4) {
        avgPortfolioValue += avgPortfolioMultipliers[i] * companyPriceLists[i][1][day+1250]
        i += 1
    }

    i = 0

    drawText("Money: $" + round_dollar(money), 100, 760, "black", "20px Times New Roman")
    drawText("Net Worth: $" + round_dollar(money + portfolioValue), 100, 800, "black", "20px Times New Roman")
    drawText("Avg Net Worth: $" + round_dollar(avgPortfolioValue), 100, 840, "black", "20px Times New Roman")
    drawText("Days: " + day, 100, 880, "black", "20px Times New Roman")

    //Calculate portfolio value
    portfolioValue = 0

    while (i < 4) {
        portfolioValue += playerStats[i][1] * companyPriceLists[i][1][day+1250]
        i += 1
    }

    i = 0
    if (dayCycle > daySpeed) {
        moneyList.push(money + portfolioValue)
        avgMoneyList.push(avgPortfolioValue)
    }



    chart(800, 901, intList(moneyList.length), moneyList, 200, 200, true, [0, 1250], [500, 2000], "blue")
    chart(800, 901, intList(moneyList.length), avgMoneyList, 200, 200, true, [0, 1250], [500, 2000], "black")




    mouseX = 0
    mouseY = 0
}

const framesPerSecond = 30;
setInterval(main, 1000 / framesPerSecond);

//Revenue Growth List Debug

//Default_Text(round_dollar(makeCompany(true)[5][0] * 100) + "%", 500, 300)


//Market Cap Debug

//Default_Text(makeCompany(true)[4] , 500, 500)