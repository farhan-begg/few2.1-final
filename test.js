const final = require('./final')


test("Testing goldenRatio", () => {
    expect(final.goldenRatio(1)).toBe(1.61803398875)
    expect(final.goldenRatio(0)).toBe(0)})

test("Testing radians", () => {
    expect(final.radians(90)).toBe(1.5707963267948966)
})

test("Testing degrees", () => {
    expect(final.degrees(1.5707963267948966)).toBe(90)
})


test("Testing toDollar", () => {
    expect(final.toDollar(1)).toBe("$1.00")
})

test("Testing getRandomInt", () => {
    expect(final.getRandomInt(1,1)).toBe(1)
})