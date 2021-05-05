
describe("StingUtils", () => {
    describe("capitalize", () => {
        it("should work with a single lowercase sentence", () => {
            expect(StringUtils.capitalize("this is a lowercase sentence.")).toBe("This is a lowercase sentence.")
        });
        it("should work with a single upper sentence", () => {
            expect(StringUtils.capitalize("ThiS Is A lowercase sentence.")).toBe("This is a lowercase sentence.")
        });
        it("should work with a multilple upper sentence", () => {
            expect(StringUtils.capitalize("thiS Is A lowerCase Sentence.")).toBe("This is a lowercase sentence.")
        });
    });
    describe("format", () => {
        it("It should replace the number in the {} to be the word passed in", () => {
            expect(StringUtils.format("I love {0}.", "cake")).toBe("I love cake.")
        });
        it("It should replace the number in the {} to be the word passed in", () => {
            expect(StringUtils.format("I love {0} and {1}.", "cake", 'pizza')).toBe("I love cake and pizza.")
        });
        it("It should replace the number in the {} to be the word passed in", () => {
            expect(StringUtils.format("I love {0} and {1} and {0}.", "cake")).toBe("I love cake and pizza and cake.")
        });
    });
});