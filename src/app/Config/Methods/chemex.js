export default chemexObj = {
    name: 'chemex',
    coffeeWeight: '41',
    waterWeight: '700',
    time: '40',
    steps: [
        {
            order: 1,
            time: { start: 0, stop: 10},
            directions: 'Pouring in concentric circles, saturate grounds with 80g of water'
        }, {
            order: 2,
            time: { start: 10, stop: 20},
            directions: 'Continue, slowly pouring in concentric circles'
        }, {
            order: 3,
            time: { start: 20, stop: 40},
            directions: 'Stop pouring once you get to 700g of water'
        }
    ]
}