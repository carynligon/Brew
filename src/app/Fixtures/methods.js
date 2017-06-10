export default methods = {
    chemex: {
        name: 'chemex',
        coffeeWeight: '41',
        waterWeight: '700',
        time: '40',
        nonTimedSteps: [
            {
                order: 1,
                title: 'Prep & Preheat',
                directions: 'Fill your kettle with filtered water and bring it up to right before a boil. While you wait, grab your chemex, coffee, scale, and filter'
            },
            {
                order: 2,
                title: 'Measure & Grind',
                directions: 'Use a scale to weight out about 42 grams of coffee and grind to a similar size of kosher salt. (#21 on a Baratza Encore)'
            }
        ],
        timedSteps: [
            {
                order: 1,
                time: { start: 0, stop: 10},
                title: 'Saturate the grounds',
                directions: 'Pouring in concentric circles, saturate grounds with 80g of water'
            }, {
                order: 2,
                time: { start: 10, stop: 20},
                title: 'Slow & Steady',
                directions: 'Continue, slowly pouring in concentric circles'
            }, {
                order: 3,
                time: { start: 20, stop: 40},
                title: 'Stop at 700g',
                directions: 'Stop pouring once you get to 700g of water'
            }
        ]
    }
}