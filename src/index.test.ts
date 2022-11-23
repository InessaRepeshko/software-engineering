import { ValuesDto, InvalidValue, returnY } from "./index";

describe('Testing function returnY()', () => {
    test('Correct calculating. x = -10, numberOfIterations = 5', () => {
        expect(returnY(-10, 5)).toBe(-10.833333333333334);
    });

    test('Correct calculating. x = 0, numberOfIterations = 5', () => {
        expect(returnY(0, 5)).toBe(0);
    });

    test('Correct calculating. x = 4, numberOfIterations = 5', () => {
        expect(returnY(4, 5)).toBe(7.5);
    });
});

describe('Testing class ValuesDto ', () => {
    test('Invalid number of iteration throw InvalidValue.', () => {
        const values = ['-10', '4', '2', '0'];
        expect(() => {
            new ValuesDto(values);
        }).toThrow(InvalidValue);
    });

    test('Invalid value of step throw InvalidValue', () => {
        const values = ['-10', '4', '0', '5'];
        expect(() => {
            new ValuesDto(values);
        }).toThrow(InvalidValue);
    });

    test('Correct creating DTO.', () => {
        const values = ['-10', '4', '2', '5'];
        expect(() => {
            new ValuesDto(values);
        }).toBeDefined();
    });
});