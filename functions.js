let mouseX = 1
let mouseY = 1
let flag = false
function printMousePos(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}

document.addEventListener("click", printMousePos);


let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext('2d')

const GAME_WIDTH = 2000;
const GAME_HEIGHT = 900;

function drawText(text, x, y, color, font1) {
    ctx.fillStyle = color;
    ctx.font = font1
    ctx.fillText(text, x, y)
}
function drawLine(x, y, z, a, color, lWidth = 1) {
    ctx.strokeStyle = color
    ctx.lineWidth = lWidth
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(z, a);
    ctx.stroke();
}
function Stroke_Rect(x, y, width, height, color, a = 0) {
    drawLine(x - a, y, x + width + a, y, color)
    drawLine(x - a, y + height, x + width + a, y + height, color)
    drawLine(x, y + height + a, x, y - a, color)
    drawLine(x + width, y - a, x + width, y + height + a, color)
    drawLine(x - a, y, x + width + a, y, color)
    drawLine(x - a, y + height, x + width + a, y + height, color)
    drawLine(x, y + height + a, x, y - a, color)
    drawLine(x + width, y - a, x + width, y + height + a, color)
}
function rect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
}
function rounded_rect(x, y, width, height, color, a = 0) {
    ctx.fillStyle = color;
    ctx.fillRect(x + 1, y + 1, width - 2, height - 2)
    drawLine(x - a, y, x + width + a, y, color, 2)
    drawLine(x - a, y + height, x + width + a, y + height, color, 2)
    drawLine(x, y + height + a, x, y - a, color, 2)
    drawLine(x + width, y - a, x + width, y + height + a, color, 2)
}
function circle(x, y, radius, color, z) {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = z
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}
function flipCoin() {
    if (Math.random() > 0.5) {
        return true
    }
    else {
        return false
    }
}
function randNum(x, y) {
    return Math.random() * (y - x) + x
}
function randInt(x, y) {
    return Math.round(Math.random() * (y - x) + x)
}
function pickNum(x, y) {
    if (Math.random() < 0.5) {
        return y
    }
    else {
        return x
    }
}
function makeArc(x, y, radius, d1, d2, color, z) {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = z
    ctx.arc(x, y, radius, d1, d2);
    ctx.stroke();
}
function listAverage(list) {
    let a = 0
    let sum = 0
    while (a < (list.length - 1)) {
        sum += list[a]
        a += 1
    }
    if (list.length === 1) {
        return list[0]
    }
    else {
        return (sum / (list.length - 1))
    }
}
function listMax(list) {
    let i = 0
    let currentMax = 0
    while (i < list.length) {
        if (list[i] > currentMax) {
            currentMax = list[i]
        }
        i++
    }
    i = 0
    return currentMax
}
function listMin(list) {
    let i = 0
    let currentMin = 0
    while (i < list.length) {
        if (list[i] < currentMin) {
            currentMin = list[i]
        }
        i++
    }
    i = 0
    return currentMin
}
function listSection(list, indexStart, indexEnd) {
    //Inclusive
    let arr = []
    for(let i  = indexStart; i <= indexEnd; i ++) {
        arr.push(list[i])
    }
    return arr
}
function Value_In_Rect(x, y, rect_x, rect_y, rect_width, rect_height) {
    let value = false
    if (x > rect_x) {
        if (x < rect_x + rect_width) {
            if (y > rect_y) {
                if (y < rect_y + rect_height) {
                    value = true
                }
            }
        }
    }
    return value
}
function Default_Text(text, x, y) {
    drawText(text, x, y, Default_Color, Default_Font)
}
function Paragraph_Text(text, max_letters) {
    let res = text.split(" ");
    let i = 0
    let letter_counter = 0
    let return_list = []
    let cumulative_strings = ""
    while (i < res.length) {
        letter_counter += res[i].length
        if (letter_counter > max_letters) {
            if (cumulative_strings != "") {
                return_list.push(cumulative_strings)
            }
            cumulative_strings = ""
            letter_counter = res[i].length
        }
        cumulative_strings += res[i] + " "
        i += 1
    }
    return_list.push(cumulative_strings)
    return_list.push("")
    return return_list
}
function amount_of_x_in_list(x, list) {
    let i = 0
    let count = 0
    while (i < list.length) {
        if (list[i] == x) {
            count += 1
        }
        i += 1
    }
    return count
}
function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}
function round_dollar(a) {
    return Math.round(a * 100) / 100
}
function round_dollar_double(a) {
    return Math.round(a * 10000) / 10000
}
function randomRevGrowth() {
    //let initial_value = round_dollar((Math.pow(1.5, (9.8 * Math.abs(Math.random()-0.05)))))/100
    //return initial_value + -0.6645 * (Math.random()*(2/3) + 1/3) * initial_value
    return (Math.pow((Math.random() - 0.45), 3) * 2 + 0.025) * variance25()
}
function intList(len) {
    let arr = []

    for(let i = 0; i < len; i++) {
        arr.push(i)
    }

    return arr
}
function randomMargin() {
    let randomNum = Math.random()
    let margin = round_dollar((Math.pow(1.5, (10 * Math.abs(randomNum - 0.05)) + 10 * randomNum))) / 100
    while (margin > 0.5 || margin < 0.015) {
        randomNum = Math.random()
        margin = round_dollar((Math.pow(1.5, (10 * Math.abs(randomNum - 0.05)) + 10 * randomNum))) / 100
    }
    return margin
}
function variance25() {
    return Math.random() * 0.5 + 0.75
}
function variance10() {
    return Math.random() * 0.2 + 0.9
}
function variance5() {
    return Math.random() * 0.1 + 0.95
}
function testMarginGrowth() {
    let i = 0
    let marginGrowthList = [randomRevGrowth() / 2.5]
    //Coinflip can be 1, 2, 3, 4, or 5.  Equal chance for all.  
    let coinflip = Math.round(Math.random() * 5 + 0.5)

    //Coinflip 1 = average with 6% (average rev growth), 2 = average with 6%, and a new random, 3 = average with a new random,
    // 4 = accelerate path up or down, 5 = average with 6%, 6%, and a new random

    if (coinflip == 1) {
        marginGrowthList.push(round_dollar_double((0.02 + marginGrowthList[i] / 2.5) * variance10()))
    }
    else if (coinflip == 2) {
        marginGrowthList.push(round_dollar_double(((0.02 + marginGrowthList[i] + randomRevGrowth() / 2.5) / 3) * variance10()))
    }
    else if (coinflip == 3) {
        marginGrowthList.push(round_dollar_double(((marginGrowthList[i] + randomRevGrowth() / 2.5) / 2) * variance25()))
    }
    else if (coinflip == 4) {
        marginGrowthList.push(round_dollar_double((1 + randomRevGrowth() / 2) * marginGrowthList[i]))
    }
    else if (coinflip == 5) {
        marginGrowthList.push(round_dollar_double(variance25() * variance10() * marginGrowthList[i]))
    }
    else {
        console.log("Problem, coinflip is " + coinflip)
    }

    return marginGrowthList[1]
}
function chart(x, y, xList, yList,  sizeX = 200, sizeY = 200, staticDimensions = false, otherXList = [], otherYList = [], color = "black", barriers = true) {
    let xMult
    let yMult

    if (staticDimensions) {
        xMult = sizeX / (listMax(otherXList) - listMin(otherXList))
        yMult = -sizeY / (listMax(otherYList) - listMin(otherYList))
    }
    else {
        xMult = sizeX / (listMax(xList) - listMin(xList))
        yMult = -sizeY / (listMax(yList) - listMin(yList))
    }
    if(barriers) {
        drawLine(x, y + sizeY, x, y - sizeY, color, 2)
        drawLine(x + sizeX, y, x - sizeX, y, color, 2)
    }
    let i = 0

    while (i < Math.min(xList.length, yList.length)) {
        //rect(xList[i]*xMult + x-1.5, yList[i]*yMult + y-1.5, 3, 3, "black")
        if (i > 0) {
            drawLine(xList[i] * xMult + x, yList[i] * yMult + y, xList[i - 1] * xMult + x, yList[i - 1] * yMult + y, color, 1)
        }
        i += 1
    }

    i = 0


}
function listRoundDollar(list) {
    let returnList = []
    let i = 0

    while (i < list.length) {
        returnList.push(round_dollar(list[i]))
        i += 1
    }

    return returnList
}
function generatePrices(startPrice, endPrice) {

    let cagr = Math.pow((endPrice / startPrice), 0.2) - 1
    let dailyCagr = Math.pow((1 + cagr), (1 / 250)) - 1
    let priceList = []
    let trendCounter = 0
    let trendLength = randInt(30, 600)
    let returnedToNorm = false
    let perfectPriceList = []
    let undoTrendCounter = 0
    let i = 0
    priceList.push(startPrice)
    perfectPriceList.push(startPrice)

    while (i < 1248) {
        //Perfect price list with no fluctuations
        perfectPriceList.push(startPrice * Math.pow(1 + dailyCagr, i + 1))

        //If in a trend, follow trend until it breaks trend (trendLength controls this)
        if (trendCounter < trendLength) {
            priceList.push(priceList[i] * (1 + dailyCagr) * (1 + (((variance25()) - 1) / 12)))
            trendCounter += 1
            undoTrendCounter = 0
        }
        else {
            returnedToNorm = false

            //console.log(i)

            if (undoTrendCounter < 150) {
                priceList.push(perfectPriceList[i] * (1 + ((variance10() - 1)/10)) + (priceList[i] - perfectPriceList[i]) * (1 - (0.0005 * undoTrendCounter)))
            }
            else if(undoTrendCounter < 215) {
                priceList.push(perfectPriceList[i] * (1 + ((variance10() - 1)/12)) + (priceList[i] - perfectPriceList[i]) * (1 - (0.001 * undoTrendCounter)))
                //console.log("Hi")
            }
            else {
                priceList.push(perfectPriceList[i] * (1 + ((variance10() - 1) / 10)))

                //console.log(Math.abs(1 - priceList[i] / perfectPriceList[i]) < 0.01)
            }



            if (Math.abs(1 - priceList[i] / perfectPriceList[i]) < 0.01) {
                if (i < 1215) {
                    returnedToNorm = true
                }
            }

            if (returnedToNorm) {
                trendLength = randInt(15, 300)
                while ((1250 - i) - trendLength < trendLength) {
                    trendLength = randInt(15, 350)
                }
                trendCounter = 0
                //console.log("Returned to norm at " + i + " Going into a " + trendLength + " long trend")
            }

            undoTrendCounter += 1
        }

        i += 1
    }

    i = 0

    priceList.push(endPrice)
    perfectPriceList.push(endPrice)

    return [listRoundDollar(perfectPriceList), listRoundDollar(priceList)]

}
function makeCompany(currentNames) {
    let price
    let marketCap
    let shares
    let shareString
    let revenueGrowthList
    let revenueList
    let presentRevenue
    let coinflip
    let i = 0
    let j = 0
    let companyNames = ["Yapple Inc.", "Grobs Inc.", "Yuzis Inc.", "Iplo Inc.", "Hula Inc.", "Ocra Inc.", "Glowerbis Inc.", "HutaBresh Inc.", "Ermitrazer Inc."]
    let nameNum = Math.round(companyNames.length * Math.random() - 0.5)
    let presentMargin
    let marginGrowthList
    let marginList
    let earningsList = []
    let priceHistory = []
    let newCompany = true
    //Rev in 1 year, 2, 3, 4, 5 Earnings in 1 year, 2, 3, 4, 5
    let analystEstimates = []
    while (amount_of_x_in_list(companyNames[nameNum], currentNames) > 0) {
        nameNum = Math.round(companyNames.length * Math.random() - 0.5)
    }
    let name = companyNames[nameNum]
    currentNames.push(companyNames[nameNum])
    if (newCompany) {
        price = 10 * Math.round(Math.random() * 7.5) + 25
        shareString = Math.round(shares / 100000000) / 10 + "B"
        let presentRevenue = round_dollar((Math.random() * 2.25 + 0.25) * (Math.round(Math.pow(Math.random() * 30000, 3)) + 500000000))
        while (presentRevenue < 1000000000 || presentRevenue > 20000000000) {
            presentRevenue = round_dollar((Math.random() * 2.25 + 0.25) * (Math.round(Math.pow(Math.random() * 30000, 3)) + 500000000))
        }

        presentMargin = randomMargin()

        //5 Years Ago, Next 5, Next 5
        revenueGrowthList = [randomRevGrowth()]

        //Revenue Growth List gen
        while (i < 2) {

            //Coinflip can be 1, 2, 3, 4, or 5.  Equal chance for all.  
            coinflip = Math.round(Math.random() * 5 + 0.5)

            //Coinflip 1 = average with 6% (average rev growth), 2 = average with 6%, and a new random, 3 = average with a new random,
            // 4 = accelerate path up or down, 5 = average with 6%, 6%, and a new random

            if (coinflip == 1) {
                revenueGrowthList.push(round_dollar_double((0.06 + revenueGrowthList[i] / 2) * variance10()))
            }
            else if (coinflip == 2) {
                revenueGrowthList.push(round_dollar_double(((0.06 + revenueGrowthList[i] + randomRevGrowth()) / 3) * variance10()))
            }
            else if (coinflip == 3) {
                revenueGrowthList.push(round_dollar_double(((revenueGrowthList[i] + randomRevGrowth()) / 2) * variance25()))
            }
            else if (coinflip == 4) {
                revenueGrowthList.push(round_dollar_double((1 + randomRevGrowth()) * revenueGrowthList[i]))
            }
            else if (coinflip == 5) {
                revenueGrowthList.push(round_dollar_double(variance25() * variance25() * variance10() * revenueGrowthList[i]))
            }
            else {
                console.log("Problem, coinflip is " + coinflip)
            }

            i++;

            //Fixing too big revenue growth and declines for big companies

            if (marketCap > 100000000000) {
                if (revenueGrowthList[i] > 0.35) {
                    revenueGrowthList[i] = (revenueGrowthList[i] + 0.06) / 2
                }
                if (revenueGrowthList[i] < -0.1) {
                    revenueGrowthList[i] = (revenueGrowthList[i] + 0) / 2
                }
            }
        }

        i = 0

        marginGrowthList = [randomRevGrowth() / 8]

        while (i < 2) {

            //Coinflip can be 1, 2, 3, 4, or 5.  Equal chance for all.  
            coinflip = Math.round(Math.random() * 5 + 0.5)

            //Coinflip 1 = average with 6% (average rev growth), 2 = average with 6%, and a new random, 3 = average with a new random,
            // 4 = accelerate path up or down, 5 = average with 6%, 6%, and a new random

            if (coinflip == 1) {
                marginGrowthList.push(round_dollar_double((0.01 + marginGrowthList[marginGrowthList.length - 1] / 2) * variance10()))
            }
            else if (coinflip == 2) {
                marginGrowthList.push(round_dollar_double(((0.012 + marginGrowthList[marginGrowthList.length - 1]) / 3) * variance10()))
            }
            else if (coinflip == 3) {
                marginGrowthList.push(round_dollar_double(((marginGrowthList[marginGrowthList.length - 1]) * (1 + Math.random() / 80) * variance25())))
            }
            else if (coinflip == 4) {
                marginGrowthList.push(round_dollar_double((1 + Math.random() / 50) * marginGrowthList[marginGrowthList.length - 1]))
            }
            else if (coinflip == 5) {
                marginGrowthList.push(round_dollar_double(variance25() * variance25() * variance10() * marginGrowthList[marginGrowthList.length - 1]))
            }
            else {
                console.log("Problem, coinflip is " + coinflip)
            }

            i++;
        }
        i = 0

        //Comment for later to make a variable variance function dependent on market cap 
        // 5 Years ago, 4, 3, 2, 1, Present, 1, 2, 3, 4, 5, etc
        revenueList = [(presentRevenue / Math.pow(1 + revenueGrowthList[0], 5)),
        (presentRevenue / Math.pow(1 + revenueGrowthList[0], 4)) * variance25(),
        (presentRevenue / Math.pow(1 + revenueGrowthList[0], 3)) * variance25(),
        (presentRevenue / Math.pow(1 + revenueGrowthList[0], 2)) * variance25(),
        (presentRevenue / Math.pow(1 + revenueGrowthList[0], 1)) * variance25(),
            presentRevenue,
        (presentRevenue * Math.pow(1 + revenueGrowthList[1], 1)) * variance25(),
        (presentRevenue * Math.pow(1 + revenueGrowthList[1], 2)) * variance25(),
        (presentRevenue * Math.pow(1 + revenueGrowthList[1], 3)) * variance25(),
        (presentRevenue * Math.pow(1 + revenueGrowthList[1], 4)) * variance25(),
        (presentRevenue * Math.pow(1 + revenueGrowthList[1], 5))
        ]
        marginList = [(presentMargin / Math.pow(1 + marginGrowthList[0], 5)),
        (presentMargin / Math.pow(1 + marginGrowthList[0], 4)) * variance25(),
        (presentMargin / Math.pow(1 + marginGrowthList[0], 3)) * variance25(),
        (presentMargin / Math.pow(1 + marginGrowthList[0], 2)) * variance25(),
        (presentMargin / Math.pow(1 + marginGrowthList[0], 1)) * variance25(),
            presentMargin,
        (presentMargin * Math.pow(1 + marginGrowthList[1], 1)) * variance25(),
        (presentMargin * Math.pow(1 + marginGrowthList[1], 2)) * variance25(),
        (presentMargin * Math.pow(1 + marginGrowthList[1], 3)) * variance25(),
        (presentMargin * Math.pow(1 + marginGrowthList[1], 4)) * variance25(),
        (presentMargin * Math.pow(1 + marginGrowthList[1], 5))
        ]


        while (i < 11) {
            revenueList[i] = Math.round(revenueList[i])
            marginList[i] = round_dollar_double(marginList[i])
            earningsList.push(Math.round(marginList[i] * revenueList[i]))
            i++;
        }
        i = 0

    }

    marketCap = (earningsList[5] * 9 + earningsList[4] * 6 + earningsList[6] * 2.5) * variance25() +
        earningsList[5] * revenueGrowthList[0] * 50 * Math.random() + earningsList[5] * marginGrowthList[0] * 100 * Math.random()
    shares = Math.round(marketCap / price)

    while (i < 5) {
        if (i == 0)
            priceHistory.push((earningsList[i] * 18 + ((revenueList[i + 1] / revenueList[i]) - 1) * 25) / shares * variance10())
        else {
            priceHistory.push((earningsList[i] * 16 + ((revenueList[i + 1] / revenueList[i]) - 1) * 25 + (revenueList[i] / revenueList[i - 1] - 1) * 25) / shares * variance10())
        }

        if (priceHistory[i] < 0) {
            priceHistory[i] = (20 * earningsList[i] / shares)
        }
        i++
    }

    i = 0

    i = 1

    let estimatedGrowthR = Math.pow((1 + revenueGrowthList[0]) * (1 + revenueGrowthList[0]) * (1 + revenueGrowthList[0]) * (1 + revenueGrowthList[1]) * 1.06, 0.2)

    while (i < 6) {
        analystEstimates.push(Math.round(revenueList[5] * Math.pow(estimatedGrowthR, i) * variance10() * variance25()))
        i++
    }

    i = 0

    i = 1

    let estimatedGrowthE = Math.pow((1 + revenueGrowthList[0] * marginGrowthList[0]) * (1 + revenueGrowthList[0] * marginGrowthList[0])
        * (1 + revenueGrowthList[0] * marginGrowthList[0]) * (1 + revenueGrowthList[1] * marginGrowthList[1]) * 1.08, 0.2)

    while (i < 6) {
        analystEstimates.push(Math.round(earningsList[5] * Math.pow(estimatedGrowthE, i) * variance10() * variance25()))
        i++
    }

    i = 0

    priceHistory.push(marketCap / shares)

    let historicalRevenueList = [revenueList[0], revenueList[1], revenueList[2], revenueList[3], revenueList[4], revenueList[5]]
    let historicalEarningsList = [earningsList[0], earningsList[1], earningsList[2], earningsList[3], earningsList[4], earningsList[5]]
    let Cagr = round_dollar((Math.pow(((earningsList[10] * 13 + earningsList[9] * 7) / shares) / price, 0.2) - 1) * 100)


    return [name, price, marketCap, shares, shareString, revenueGrowthList, revenueList, historicalRevenueList, marginList, earningsList, historicalEarningsList, Cagr, priceHistory, analystEstimates, marginGrowthList]
}
function displayCompany([name, price, marketCap, shares, shareString, revenueGrowthList, revenueList, historicalRevenueList, marginList, earningsList, historicalEarningsList, Cagr, priceHistory, analystEstimates, marginGrowthList], x, y, days, detailPriceHistory, playerStats) {
    Stroke_Rect(x, y, 205, 130, "black")

    let summaryX = 0
    let summaryY = 0

    let revenueX = 55
    let revenueY = 120 + 20

    revenueY -= 255

    let earningsX = 55
    let earningsY = 220 + 20

    earningsY -= 405

    let priceX = 240
    let priceY = 20

    priceX -= 300
    priceY -= 405

    let analystX = 0
    let analystY = 160

    analystX -= 300

    marketCap = price * shares

    let year = 0

    if (days > 250) {
        year = Math.floor(days / 250)
        if (Math.floor(days / 250) == days / 250) {
            //console.log("Year: " + year+ "Length: " + priceHistory.length + "Price: " + price)
        }
    }

    drawText(name, x + 5, y + 28, "black", "28px Times New Roman")
    drawText("Price: " + price, x + 5, y + 56, "black", "20px Times New Roman")
    drawText("Market Cap: " + round_dollar(marketCap / 1000000000) + "B", x + 5, y + 86, "black", "20px Times New Roman")
    //drawText("PS Ratio: " + round_dollar(marketCap / revenueList[5 + year]), x + 5, y + 116, "black", "20px Times New Roman")
    drawText("PE Ratio: " + round_dollar(marketCap / earningsList[5 + year]), x + 5, y + 116, "black", "20px Times New Roman")

    Stroke_Rect(x + revenueX, y + 255 + revenueY, 150, 95, "black")
    drawText("Revenue", x + 5 + revenueX, y + 278 + revenueY, "black", "24px Times New Roman")

    Stroke_Rect(x + earningsX, y + 405 + earningsY, 150, 95, "black")
    drawText("Earnings", x + 5 + earningsX, y + 428 + earningsY, "black", "24px Times New Roman")

    Stroke_Rect(x + 300 + priceX, y + 405 + priceY - 10, 150, 105, "black")
    drawText("Price History", x + 305 + priceX, y + 428 + priceY - 10, "black", "24px Times New Roman")

    drawText("Avg Price: " + round_dollar(playerStats[0]),  x + 275 + priceX, y + 598 + priceY, "black", "18px Arial")
    drawText("Shares: " + round_dollar(playerStats[1]),  x + 275 + priceX, y + 623 + priceY, "black", "18px Arial")
    drawText("Open gain: $" + separator(round_dollar(price * playerStats[1] -  playerStats[0] * playerStats[1])),  x + 275 + priceX, y + 648 + priceY,"black", "18px Arial" )
    drawText("Closed gains: $" + separator(round_dollar(playerStats[2])),  x + 275 + priceX, y + 673 + priceY,"black", "18px Arial" )

    //Stroke_Rect(x + 300 + analystX, y + analystY, 200, 200, "black")
    //drawText("Analyst Estimates", x + 305 + analystX, y + 23 + analystY, "black", "24px Times New Roman")

    Stroke_Rect(x, y, 418, 360)

    // Used to resize boxes and charts
    let chartMultipleMultiple = 2
    //historicalEarningsList = [earningsList[0], earningsList[1], earningsList[2], earningsList[3], earningsList[4], earningsList[5]]

    let revListForMaxCalc = []
    let earnListForMaxCalc = []
    let priceListForMaxCalc = detailPriceHistory

    for (let i = 0; i < 6; i++) {
        revListForMaxCalc.push(revenueList[year + i])
        earnListForMaxCalc.push(earningsList[year + i])
    }


    //console.log(revListForMaxCalc)
    

    //console.log(revenueList.length)

    //console.log("Len: " + earningsList.length)
    //console.log(year)


    //120 pixels divided out
    let chartMultipleR = round_dollar_double((listMax(revListForMaxCalc) * 1.05) / 120 / 1000000000) * chartMultipleMultiple
    let chartMultipleE = round_dollar_double((listMax(earnListForMaxCalc) * 1.05) / 120 / 1000000000) * chartMultipleMultiple
    let chartMultipleP = round_dollar_double((listMax(priceListForMaxCalc)) / 240) * chartMultipleMultiple

    drawLine(x - 5 + revenueX, y + 350 - 148 / chartMultipleMultiple / 5 + revenueY, x + 5 + revenueX, y + 350 - 148 / chartMultipleMultiple / 5 + revenueY, "black")
    drawLine(x - 5 + revenueX, y + 350 - 148 * 2 / chartMultipleMultiple / 5 + revenueY, x + 5 + revenueX, y + 350 - 148 / chartMultipleMultiple * 2 / 5 + revenueY, "black")
    drawLine(x - 5 + revenueX, y + 350 - 148 * 3 / chartMultipleMultiple / 5 + revenueY, x + 5 + revenueX, y + 350 - 148 / chartMultipleMultiple * 3 / 5 + revenueY, "black")
    drawLine(x - 5 + revenueX, y + 350 - 148 * 4 / chartMultipleMultiple / 5 + revenueY, x + 5 + revenueX, y + 350 - 148 / chartMultipleMultiple * 4 / 5 + revenueY, "black")

    drawLine(x - 5 + earningsX, y + 500 - 148 / chartMultipleMultiple / 5 + earningsY, x + 5 + earningsX, y + 500 - 148 / chartMultipleMultiple / 5 + earningsY, "black")
    drawLine(x - 5 + earningsX, y + 500 - 148 * 2 / chartMultipleMultiple / 5 + earningsY, x + 5 + earningsX, y + 500 - 148 / chartMultipleMultiple * 2 / 5 + earningsY, "black")
    drawLine(x - 5 + earningsX, y + 500 - 148 * 3 / chartMultipleMultiple / 5 + earningsY, x + 5 + earningsX, y + 500 - 148 / chartMultipleMultiple * 3 / 5 + earningsY, "black")
    drawLine(x - 5 + earningsX, y + 500 - 148 * 4 / chartMultipleMultiple / 5 + earningsY, x + 5 + earningsX, y + 500 - 148 / chartMultipleMultiple * 4 / 5 + earningsY, "black")

    drawLine(x + 295 + priceX, y + 500 - 148 / chartMultipleMultiple / 5 + priceY, x + 305 + priceX, y + 500 - 148 / chartMultipleMultiple / 5 + priceY, "black")
    drawLine(x + 295 + priceX, y + 500 - 148 * 2 / chartMultipleMultiple / 5 + priceY, x + 305 + priceX, y + 500 - 148 / chartMultipleMultiple * 2 / 5 + priceY, "black")
    drawLine(x + 295 + priceX, y + 500 - 148 * 3 / chartMultipleMultiple / 5 + priceY, x + 305 + priceX, y + 500 - 148 / chartMultipleMultiple * 3 / 5 + priceY, "black")
    drawLine(x + 295 + priceX, y + 500 - 148 * 4 / chartMultipleMultiple / 5 + priceY, x + 305 + priceX, y + 500 - 148 / chartMultipleMultiple * 4 / 5 + priceY, "black")

    drawText(round_dollar(chartMultipleR * 120 / 4) + "B", x - 48 + revenueX, y + 348 - 148 / chartMultipleMultiple / 5 + revenueY, "black", "12px Times New Roman")
    drawText(round_dollar(chartMultipleR * 120 / 2) + "B", x - 48 + revenueX, y + 348 - 148 / chartMultipleMultiple * 2 / 5 + revenueY, "black", "12px Times New Roman")
    drawText(round_dollar(chartMultipleR * 120 * 3 / 4) + "B", x - 48 + revenueX, y + 348 - 148 / chartMultipleMultiple * 3 / 5 + revenueY, "black", "12px Times New Roman")
    drawText(round_dollar(chartMultipleR * 120) + "B", x - 48 + revenueX, y + 348 - 148 / chartMultipleMultiple * 4 / 5 + revenueY, "black", "12px Times New Roman")

    drawText(round_dollar(chartMultipleE * 120 / 4) + "B", x - 48 + earningsX, y + 498 - 148 / chartMultipleMultiple / 5 + earningsY, "black", "12px Times New Roman")
    drawText(round_dollar(chartMultipleE * 120 / 2) + "B", x - 48 + earningsX, y + 498 - 148 / chartMultipleMultiple * 2 / 5 + earningsY, "black", "12px Times New Roman")
    drawText(round_dollar(chartMultipleE * 120 * 3 / 4) + "B", x - 48 + earningsX, y + 498 - 148 / chartMultipleMultiple * 3 / 5 + earningsY, "black", "12px Times New Roman")
    drawText(round_dollar(chartMultipleE * 120) + "B", x - 48 + earningsX, y + 498 - 148 / chartMultipleMultiple * 4 / 5 + earningsY, "black", "12px Times New Roman")

    drawText("$" + Math.round(chartMultipleP * 120 / 4), x + 270 + priceX, y + 500 - 148 / chartMultipleMultiple / 5 + priceY, "black", "12px Times New Roman")
    drawText("$" + Math.round(chartMultipleP * 120 / 2), x + 270 + priceX, y + 500 - 148 / chartMultipleMultiple * 2 / 5 + priceY, "black", "12px Times New Roman")
    drawText("$" + Math.round(chartMultipleP * 120 * 3 / 4), x + 270 + priceX, y + 500 - 148 / chartMultipleMultiple * 3 / 5 + priceY, "black", "12px Times New Roman")
    drawText("$" + Math.round(chartMultipleP * 120), x + 270 + priceX, y + 500 - 148 / chartMultipleMultiple * 4 / 5 + priceY, "black", "12px Times New Roman")

    rect(x + 149 / 7 - 10 + revenueX, y + 349 - (revenueList[0 + year] / (chartMultipleR * 1000000000)) + revenueY, 15, (revenueList[0 + year] / (chartMultipleR * 1000000000)), "#0066ff")
    rect(x + 149 * 2 / 7 - 10 + revenueX, y + 349 - (revenueList[1 + year] / (chartMultipleR * 1000000000)) + revenueY, 15, (revenueList[1 + year] / (chartMultipleR * 1000000000)), "#0066ff")
    rect(x + 149 * 3 / 7 - 10 + revenueX, y + 349 - (revenueList[2 + year] / (chartMultipleR * 1000000000)) + revenueY, 15, (revenueList[2 + year] / (chartMultipleR * 1000000000)), "#0066ff")
    rect(x + 149 * 4 / 7 - 10 + revenueX, y + 349 - (revenueList[3 + year] / (chartMultipleR * 1000000000)) + revenueY, 15, (revenueList[3 + year] / (chartMultipleR * 1000000000)), "#0066ff")
    rect(x + 149 * 5 / 7 - 10 + revenueX, y + 349 - (revenueList[4 + year] / (chartMultipleR * 1000000000)) + revenueY, 15, (revenueList[4 + year] / (chartMultipleR * 1000000000)), "#0066ff")
    rect(x + 149 * 6 / 7 - 10 + revenueX, y + 349 - (revenueList[5 + year] / (chartMultipleR * 1000000000)) + revenueY, 15, (revenueList[5 + year] / (chartMultipleR * 1000000000)), "#0066ff")

    rect(x + 149 / 7 - 10 + earningsX, y + 499 - (earningsList[0 + year] / (chartMultipleE * 1000000000)) + earningsY, 15, (earningsList[0 + year] / (chartMultipleE * 1000000000)), "#00e600")
    rect(x + 149 * 2 / 7 - 10 + earningsX, y + 499 - (earningsList[1 + year] / (chartMultipleE * 1000000000)) + earningsY, 15, (earningsList[1 + year] / (chartMultipleE * 1000000000)), "#00e600")
    rect(x + 149 * 3 / 7 - 10 + earningsX, y + 499 - (earningsList[2 + year] / (chartMultipleE * 1000000000)) + earningsY, 15, (earningsList[2 + year] / (chartMultipleE * 1000000000)), "#00e600")
    rect(x + 149 * 4 / 7 - 10 + earningsX, y + 499 - (earningsList[3 + year] / (chartMultipleE * 1000000000)) + earningsY, 15, (earningsList[3 + year] / (chartMultipleE * 1000000000)), "#00e600")
    rect(x + 149 * 5 / 7 - 10 + earningsX, y + 499 - (earningsList[4 + year] / (chartMultipleE * 1000000000)) + earningsY, 15, (earningsList[4 + year] / (chartMultipleE * 1000000000)), "#00e600")
    rect(x + 149 * 6 / 7 - 10 + earningsX, y + 499 - (earningsList[5 + year] / (chartMultipleE * 1000000000)) + earningsY, 15, (earningsList[5 + year] / (chartMultipleE * 1000000000)), "#00e600")

    drawText("Margins: ", x - 42 + earningsX, y + 515 + earningsY, "black", "16px Times New Roman")
    drawText(Math.round((marginList[0 + year] * 1000)) / 10 + "%", x + 150 * 1.5 / 7 - 16 + earningsX, y + 515 + earningsY, "black", "11px Times New Roman")
    drawText(Math.round(marginList[2 + year] * 1000) / 10 + "%", x + 150 * 3 / 7 - 16 + earningsX, y + 515 + earningsY, "black", "11px Times New Roman")
    drawText(Math.round(marginList[3 + year] * 1000) / 10 + "%", x + 150 * 4.5 / 7 - 16 + earningsX, y + 515 + earningsY, "black", "11px Times New Roman")
    drawText(Math.round(marginList[5 + year] * 1000) / 10 + "%", x + 150 * 6 / 7 - 16 + earningsX, y + 515 + earningsY, "black", "11px Times New Roman")

    /*
    circle(x + 300 + 149 / 7 + priceX, y + 499 - (priceHistory[0 + year] / chartMultipleP) + priceY, 1, "black", 2)
    circle(x + 300 + 149 * 2 / 7 + priceX, y + 499 - (priceHistory[1 + year] / chartMultipleP) + priceY, 1, "black", 2)
    circle(x + 300 + 149 * 3 / 7 + priceX, y + 499 - (priceHistory[2 + year] / chartMultipleP) + priceY, 1, "black", 2)
    circle(x + 300 + 149 * 4 / 7 + priceX, y + 499 - (priceHistory[3 + year] / chartMultipleP) + priceY, 1, "black", 2)
    circle(x + 300 + 149 * 5 / 7 + priceX, y + 499 - (priceHistory[4 + year] / chartMultipleP) + priceY, 1, "black", 2)
    circle(x + 300 + 149 * 6 / 7 + priceX, y + 499 - (priceHistory[5 + year] / chartMultipleP) + priceY, 1, "black", 2)

    drawLine(x + 300 + 149 / 7 + priceX, y + 499 - (priceHistory[0 + year] / chartMultipleP) + priceY, x + 300 + 149 * 2 / 7 + priceX, y + 499 - (priceHistory[1 + year] / chartMultipleP) + priceY)
    drawLine(x + 300 + 149 * 2 / 7 + priceX, y + 499 - (priceHistory[1 + year] / chartMultipleP) + priceY, x + 300 + 149 * 3 / 7 + priceX, y + 499 - (priceHistory[2 + year] / chartMultipleP) + priceY)
    drawLine(x + 300 + 149 * 3 / 7 + priceX, y + 499 - (priceHistory[2 + year] / chartMultipleP) + priceY, x + 300 + 149 * 4 / 7 + priceX, y + 499 - (priceHistory[3 + year] / chartMultipleP) + priceY)
    drawLine(x + 300 + 149 * 4 / 7 + priceX, y + 499 - (priceHistory[3 + year] / chartMultipleP) + priceY, x + 300 + 149 * 5 / 7 + priceX, y + 499 - (priceHistory[4 + year] / chartMultipleP) + priceY)
    drawLine(x + 300 + 149 * 5 / 7 + priceX, y + 499 - (priceHistory[4 + year] / chartMultipleP) + priceY, x + 300 + 149 * 6 / 7 + priceX, y + 499 - (priceHistory[5 + year] / chartMultipleP) + priceY)
    */
    //x + 300 + priceX, y + 405 + priceY - 10, 150, 105,
    chart(x + 310 + priceX, y + 510 + priceY - 10, intList(detailPriceHistory.length), detailPriceHistory, 120, 60, false, [], [], "black", false) 
    //drawText("Revenue Next Year: " + round_dollar(analystEstimates[0 + year] / 1000000000) + "B", x + 305 + analystX, y + 50 + analystY, "black", "16px Times New Roman")
    //drawText("Revenue in 3 Years: " + round_dollar(analystEstimates[2 + year] / 1000000000) + "B", x + 305 + analystX, y + 75 + analystY, "black", "16px Times New Roman")
    //drawText("Revenue in 5 Years: " + round_dollar(analystEstimates[4 + year] / 1000000000) + "B", x + 305 + analystX, y + 100 + analystY, "black", "16px Times New Roman")

    //drawText("Earnings Next Year: " + round_dollar(analystEstimates[5 + year] / 1000000000) + "B", x + 305 + analystX, y + 135 + analystY, "black", "16px Times New Roman")
    //drawText("Earnings in 3 Years: " + round_dollar(analystEstimates[7 + year] / 1000000000) + "B", x + 305 + analystX, y + 160 + analystY, "black", "16px Times New Roman")
    //drawText("Earnings in 5 Years: " + round_dollar(analystEstimates[9 + year] / 1000000000) + "B", x + 305 + analystX, y + 185 + analystY, "black", "16px Times New Roman")

    //Cheats
    /*

    drawText("Revenue Next Year: " +  round_dollar(revenueList[6]/1000000000) + "B", 100, 100 , "black", "20px Times New Roman")
    drawText("Revenue in 3 Years: " + round_dollar(revenueList[8]/1000000000) + "B", 100, 130 , "black", "20px Times New Roman")
    drawText("Revenue in 5 Years: " + round_dollar(revenueList[10]/1000000000) + "B", 100, 160 , "black", "20px Times New Roman")

    drawText("Earnings Next Year: " +  round_dollar(earningsList[6]/1000000000) + "B", 100, 190 , "black", "20px Times New Roman")
    drawText("Earnings in 3 Years: " + round_dollar(earningsList[8]/1000000000) + "B", 100, 220 , "black", "20px Times New Roman")
    drawText("Earnings in 5 Years: " +  round_dollar(earningsList[10]/1000000000) + "B", 100, 250 , "black", "20px Times New Roman")

    */







    //drawText("CAGR: " + round_dollar((Math.pow(((earningsList[10] * 13 + earningsList[9] * 7)/shares) / price, 0.2) -1) * 100) + "%", 400, 100, "black")

    historicalEarningsList = [earningsList[0], earningsList[1], earningsList[2], earningsList[3], earningsList[4], earningsList[5]]




}
function updateCompany([name, price, marketCap, shares, shareString, revenueGrowthList, revenueList, historicalRevenueList, marginList, earningsList, historicalEarningsList, Cagr, priceHistory, analystEstimates, marginGrowthList]) {

    let i = 0
    let coinflip

    //Add some revenue growth numbers



    //Revenue Growth List gen
    while (i < 2) {



        //Coinflip can be 1, 2, 3, 4, or 5.  Equal chance for all.  
        coinflip = Math.round(Math.random() * 5 + 0.5)

        //Coinflip 1 = average with 6% (average rev growth), 2 = average with 6%, and a new random, 3 = average with a new random,
        // 4 = accelerate path up or down, 5 = average with 6%, 6%, and a new random

        // < 500B Revenue

        if (revenueList[revenueList.length - 1] < 200000000000) {

            if (coinflip == 1) {
                revenueGrowthList.push(round_dollar_double((0.04 + revenueGrowthList[revenueGrowthList.length -1] / 2) * variance10()))
            }
            else if (coinflip == 2) {
                revenueGrowthList.push(round_dollar_double(((0.04 + revenueGrowthList[revenueGrowthList.length -1] + randomRevGrowth()) / 2.5) * variance10()))
            }
            else if (coinflip == 3) {
                revenueGrowthList.push(round_dollar_double(((revenueGrowthList[revenueGrowthList.length -1] + randomRevGrowth()) / 2) * variance10()))
            }
            else if (coinflip == 4) {
                revenueGrowthList.push(round_dollar_double((1 + randomRevGrowth()) * revenueGrowthList[revenueGrowthList.length -1]))
            }
            else if (coinflip == 5) {
                revenueGrowthList.push(round_dollar_double(variance25() * variance10() * variance10() * revenueGrowthList[revenueGrowthList.length -1]))
            }
            else {
                console.log("Problem, coinflip is " + coinflip)
            }
        }
        // < 500B Revenue
        else if (revenueList[revenueList.length - 1] < 500000000000) {

            if (coinflip == 1) {
                revenueGrowthList.push(round_dollar_double((0.02 + revenueGrowthList[revenueGrowthList.length -1] / 2) * variance10()))
            }
            else if (coinflip == 2) {
                revenueGrowthList.push(round_dollar_double(((0.02 + revenueGrowthList[revenueGrowthList.length -1] + randomRevGrowth() / 2) / 3) * variance10()))
            }
            else if (coinflip == 3) {
                revenueGrowthList.push(round_dollar_double(((revenueGrowthList[revenueGrowthList.length -1] / 1.2 + randomRevGrowth() / 2) / 2) * variance25()))
            }
            else if (coinflip == 4) {
                revenueGrowthList.push(round_dollar_double((1 + randomRevGrowth() / 2) * revenueGrowthList[revenueGrowthList.length -1] / 1.1))
            }
            else if (coinflip == 5) {
                revenueGrowthList.push(round_dollar_double(variance25() * variance25() * variance10() * revenueGrowthList[revenueGrowthList.length -1] / 1.25))
            }
            else {
                console.log("Problem, coinflip is " + coinflip)
            }
        }
        else {
            revenueGrowthList.push(-0.02)
            //console.log("Bad: " + revenueList[revenueList.length-1]/1000000000)
        }

        //revenueGrowthList.push(0.06)


        i++;

        //revenueGrowthList.push(revGrowthAddition)
    }

    i = 0

    while (i < 2) {

        //Coinflip can be 1, 2, 3, 4, or 5.  Equal chance for all.  
        coinflip = Math.round(Math.random() * 5 + 0.5)

        //Coinflip 1 = average with 6% (average rev growth), 2 = average with 6%, and a new random, 3 = average with a new random,
        // 4 = accelerate path up or down, 5 = average with 6%, 6%, and a new random

        if (marginList[marginList.length - 1] < 0.4) {
            if (coinflip == 1) {
                marginGrowthList.push(round_dollar_double((0.01 + marginGrowthList[marginGrowthList.length - 1] / 2) * variance10()))
            }
            else if (coinflip == 2) {
                marginGrowthList.push(round_dollar_double(((0.012 + marginGrowthList[marginGrowthList.length - 1]) / 3) * variance10()))
            }
            else if (coinflip == 3) {
                marginGrowthList.push(round_dollar_double(((marginGrowthList[marginGrowthList.length - 1]) * (1 + Math.random() / 80) * variance25())))
            }
            else if (coinflip == 4) {
                marginGrowthList.push(round_dollar_double((1 + Math.random() / 50) * marginGrowthList[marginGrowthList.length - 1]))
            }
            else if (coinflip == 5) {
                marginGrowthList.push(round_dollar_double(variance25() * variance25() * variance10() * marginGrowthList[marginGrowthList.length - 1]))
            }
            else {
                console.log("Problem, coinflip is " + coinflip)
            }
        }
        else if (marginList[marginList.length - 1] < 0.6) {
            marginGrowthList.push(round_dollar_double(marginGrowthList[marginGrowthList.length - 1] * variance10() * (1 + Math.random() / 100) * 0.985))
        }
        else {
            marginGrowthList.push(round_dollar_double(marginGrowthList[marginGrowthList.length - 1] / 1.2 * variance10() * (1 + Math.random() / 100) * 0.9))
        }

        i++;
    }

    i = 0

    //Comment for later to make a variable variance function dependent on market cap 
    // 5 Years ago, 4, 3, 2, 1, Present, 1, 2, 3, 4, 5, etc
    revenueList.push((revenueList[revenueList.length - 1] * Math.pow(1 + revenueGrowthList[revenueGrowthList.length - 2], 1)) * variance25())
    revenueList.push((revenueList[revenueList.length - 1] * Math.pow(1 + revenueGrowthList[revenueGrowthList.length - 2], 1)) * variance25())
    revenueList.push((revenueList[revenueList.length - 1] * Math.pow(1 + revenueGrowthList[revenueGrowthList.length - 1], 1)) * variance25())
    revenueList.push((revenueList[revenueList.length - 1] * Math.pow(1 + revenueGrowthList[revenueGrowthList.length - 1], 1)) * variance25())
    revenueList.push((revenueList[revenueList.length - 1] * Math.pow(1 + revenueGrowthList[revenueGrowthList.length - 1], 1)) * variance10())

    marginList.push((marginList[marginList.length - 1] * Math.pow(1 + marginGrowthList[marginGrowthList.length - 2], 1)) * variance25())
    marginList.push((marginList[marginList.length - 1] * Math.pow(1 + marginGrowthList[marginGrowthList.length - 2], 1)) * variance25())
    marginList.push((marginList[marginList.length - 1] * Math.pow(1 + marginGrowthList[marginGrowthList.length - 1], 1)) * variance25())
    marginList.push((marginList[marginList.length - 1] * Math.pow(1 + marginGrowthList[marginGrowthList.length - 1], 1)) * variance25())
    marginList.push(marginList[marginList.length - 1] * Math.pow(1 + marginGrowthList[marginGrowthList.length - 1], 1) * variance10())

    i = revenueList.length - 3

    while (i < revenueList.length) {
        revenueList[i] = Math.round(revenueList[i])
        marginList[i] = round_dollar_double(marginList[i])
        i++
    }

    i = 0

    while (i < 5) {
        earningsList.push(Math.round(marginList[marginList.length - 5 + i] * revenueList[marginList.length - 5 + i]))
        i++
    }

    i = 0

    Cagr = round_dollar((Math.pow(((earningsList[earningsList.length - 1] * 13 + earningsList[earningsList.length - 3] * 7) / shares) / price, 0.2) - 1) * 100)

    while (i < 5) {
        if (i == 0)
            priceHistory.push(round_dollar((earningsList[earningsList.length - 4 + i] * 18 + ((revenueList[revenueList.length - 4 + i + 1] / revenueList[revenueList.length - 4 + i]) - 1) * 25) / shares * variance10()))
        else {
            priceHistory.push(round_dollar((earningsList[earningsList.length - 2] * 16 + ((revenueList[revenueList.length - 1] / revenueList[revenueList.length - 2]) - 1) * 25 + (revenueList[revenueList.length - 2] / revenueList[revenueList.length - 3] - 1) * 25) / shares * variance10()))

            /*
            Old debugging code

            if(!flag) {
                console.log("-------------------------------------------")
                console.log("Earnings List [" + (earningsList.length-4+i) + "] = " + earningsList[earningsList.length-4+i])
                console.log("Revenue List [" + (revenueList.length-4+i+1) + "] = " + revenueList[revenueList.length-4+i + 1])
                console.log("Revenue List [" + (revenueList.length-4+i) + "] = " + revenueList[revenueList.length-4+i])
                console.log("Revenue List [" + (revenueList.length-4+i - 1) + "] = " + revenueList[revenueList.length-4+i-1])
                console.log()
                console.log((earningsList[earningsList.length-4+i]) + " * 16 + " + "(" + (revenueList[revenueList.length-4+i + 1] ) + "/" + (revenueList[revenueList.length-4+i] - 1) + ") * 25 + "  + "(" + (revenueList[revenueList.length-4+i] ) + "/" + (revenueList[revenueList.length-4+i-1] - 1) + ") * 25")
                console.log("-------------------------------------------")
                if(i == 4) {
                    flag = true
                }
            }
            */

        }
        i++

        //console.log(name + " i: " + i)
    }

    i = 0

    historicalEarningsList = [earningsList[0], earningsList[1], earningsList[2], earningsList[3], earningsList[4], earningsList[5]]

    return [name, price, marketCap, shares, shareString, revenueGrowthList, revenueList, historicalRevenueList, marginList, earningsList, historicalEarningsList, Cagr, priceHistory, analystEstimates, marginGrowthList]

}
function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}
function mergeLists(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1
}

export {
    drawText, drawLine, Stroke_Rect, rect, rounded_rect, circle, flipCoin, randNum, randInt, pickNum, makeArc, listAverage, listMax, Value_In_Rect,
    Default_Text, Paragraph_Text, amount_of_x_in_list, round_dollar, round_dollar_double, randomRevGrowth, randomMargin, variance10, variance25,
    makeCompany, displayCompany, getStandardDeviation, testMarginGrowth, listRoundDollar, generatePrices, chart, listMin, updateCompany, mergeLists, intList, listSection, separator
}
