describe("MathUtils", () => {
    describe("add", () => {
        it('should add 2 numbers', () => {
            expect(MathUtils.add(1,2)).toBe(3);
        });
        it('should gracefully handle strings', () =>{
            expect(MathUtils.add('not', 'numbers')).toBe('notnumbers');
        });
        it('should handle negative numbers', () =>{
            expect(MathUtils.add(-1, -4)).toBe(-5)
            });
        it('should handle bot negative  and postive numbers', () =>{
            expect(MathUtils.add(2, -4)).toBe(-2)
        });
        it('should work for non-integer numbers', () =>{
            expect(MathUtils.add(2.5, 4.1)).toBe(6.6)
        });
    });

    describe("subtract", () => {
        it('should add 2 numbers', () => {
            expect(MathUtils.subtract(4,3)).toBe(1);
        });
        it('should  handle strings', () =>{
            expect(() => {MathUtils.subtract('not', 'numbers');})
            .toThrow(new Error('Either not or numbers are not a number'));
        });
        it('should handle negative numbers', () =>{
            expect(MathUtils.subtract(-2, -4)).toBe(2)
        });
        it('should handle bot negative  and postive numbers', () =>{
            expect(MathUtils.subtract(-2, -6)).toBe(4)
        });
        it('should work for non-integer numbers', () =>{
            expect(MathUtils.subtract(4.5, 2.1)).toBe(2.4)
        });
    });
    describe("subtract", () => {
        it('should average 2 numbers', () => {
            expect(MathUtils.average(2, 4)).toBe(3);
        });
        it('should average more than 2  numbers', () => {
            expect(MathUtils.average(2, 4, 6, 10)).toBe(5.5);
        });
        it('should work for negative numbers', () => {
            expect(MathUtils.average(-2, 4, 10)).toBe(4);
        });
        it('should work for one number', () => {
            expect(MathUtils.average(2)).toBe(2);
        });
        // it('should  handle strings', () =>{
        //     expect(() => {MathUtils.average('not', 'numbers');})
        //         .toThrow(new Error(`not is not a number`));
        // });
        it('should work for negative numbers', () => {
            expect(MathUtils.average(-2, -2, -2, -2)).toBe(-2);
        });
        it('should work for one number', () => {
            expect(MathUtils.average(-0.1, 0, 0.1)).toBe(0);
            expect(MathUtils.average(.1, .2)).toBeCloseTo(.15, 3);
        });
    });
});