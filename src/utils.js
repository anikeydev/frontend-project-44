export const randomNum = () => {
    return Math.round(Math.random() * 100)
}

export const randomNumByMax = (max) => {
    return Math.floor(Math.random() * max)
}

export const randomOper = () => {
    const arrayOperation = ['+', '-', '*']

    return arrayOperation[randomNumByMax(arrayOperation.length)]
}

export const randomNumByMinMax = (min, max) => {
    const num = Math.floor((Math.random() * max) + min)
    if (num <= max) {
        return num
    } else {
        return randomNumByMinMax(min, max)
    }
}