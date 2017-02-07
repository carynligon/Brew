export default chemexObj = {
    name: 'chemex',
    coffeeWeight: '41',
    waterWeight: '700',
    time: '240',
    steps: [
        {
            order: 1,
            time: { start: 0, stop: 30},
            directions: 'Pouring in concentric circles, saturate grounds with 80g of water'
        }, {
            order: 2,
            time: { start: 30, stop: 240},
            directions: 'Continue, slowly pouring in concentric circles'
        }, {
            order: 3,
            time: { start: 240, stop: 240},
            directions: 'Stop pouring once you get to 700g of water'
        }
    ]
}