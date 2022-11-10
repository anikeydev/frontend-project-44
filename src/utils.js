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