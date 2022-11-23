import process from 'process'
import fs from 'fs';

export class ValuesDto {
    private NUMBER_OF_VALUES: number = 4;
    private EXPORT_FILE_DEFAULT_TYPE: string = 'txt';
    private EXPORT_FILE_TYPES: string[] = [
        this.EXPORT_FILE_DEFAULT_TYPE,
        'csv'
    ];

    public readonly start: number;
    public readonly end: number;
    public readonly step: number;
    public readonly numberOfIterations: number;
    public readonly saveToFile: boolean;
    private fileExtension: string = this.EXPORT_FILE_DEFAULT_TYPE;

    constructor(values: string[]) {
        if (values.length < this.NUMBER_OF_VALUES) {
            throw new Error(`Error. Invalid number of values. Support ${this.NUMBER_OF_VALUES} arguments.`);
        }

        this.start = parseInt(values[0]);
        this.end = parseInt(values[1]);
        this.step = parseInt(values[2]);
        this.numberOfIterations = parseInt(values[3]);
        this.saveToFile = values?.[4].includes('--saveToFile');
        if (this.saveToFile) {
            this.setFileType(values[4]);
        }

        this.validateValues();
    }

    private validateValues(): void {
        if (this.start >= this.end) {
            throw new InvalidValue("Runtime error! Start variable must be less end.");
        }

        if (this.step <= 0) {
            throw new InvalidValue("Runtime error! Step must be greater than zero.");
        }

        if (this.numberOfIterations <= 0) {
            throw new InvalidValue("Runtime error! Number of iterations must be greater than zero.");
        }
    }
    
    private setFileType(saveToFileArg: string): void {
        if (saveToFileArg.indexOf('=') > 0) {
            const type = saveToFileArg.slice(saveToFileArg.indexOf('=') + 1);
            if(!this.EXPORT_FILE_TYPES.includes(type)) {
                throw new InvalidValue(`Runtime error! You enter type: '${type}'. Support export type extension like 
                    ${this.EXPORT_FILE_TYPES.join(', ')}`);
            }

            this.fileExtension = type;
        }
    }

    public getFileExtension(): string {
        return this.fileExtension;
    }
}

export class InvalidValue extends Error {
    constructor(message: string) {
        super(message);
    }
}

export function readVariablesArgs(): ValuesDto {
    return new ValuesDto(process.argv.slice(2));
}

export function returnY(x: number, numberOfIterations: number): number {
    let y: number = 0;

    if (x > 0) {
        for (let i = 0; i <= numberOfIterations - 1; i++) {
            let subLoopSum: number = 0;
            for (let j = 0; j <= i; j++) {
                subLoopSum += i / (j + x + 1);
            }

            y += subLoopSum;
        }
    } else {
        for (let i = 2; i <= numberOfIterations - 1; i++) {
            y += x / i;
        }
    }

    return y;
}



export function printResult(valuesDto: ValuesDto): void {
    let result = "X\tY\n";

    let x = valuesDto.start;
    for (x; x <= valuesDto.end; x += valuesDto.step) {
        result += `${x}\t${returnY(x, valuesDto.numberOfIterations)}\n`;
    }

    if (valuesDto.saveToFile) {
        saveResultToFile(valuesDto);
    }

    console.log(result);
}

export function saveResultToFile(valuesDto: ValuesDto): void {
    if (valuesDto.getFileExtension() === 'txt') {

        let result = "X\tY\n";
        let x = valuesDto.start;
        for (x; x <= valuesDto.end; x += valuesDto.step) {
            result += `${x}\t${returnY(x, valuesDto.numberOfIterations)}\n`;
        }

        fs.writeFile('result.txt', result, 'utf8', function (err) {
            if (err) throw new Error(err.message);
        });
    } else if (valuesDto.getFileExtension() === 'csv') {
        let result = "X,Y\r\n";

        let x = valuesDto.start;
        for (x; x <= valuesDto.end; x += valuesDto.step) {
            result += `${x},${returnY(x, valuesDto.numberOfIterations)}\r\n`;
        }

        fs.writeFile('result.csv', result, 'utf8', function (err) {
            if (err) throw new Error(err.message);
        });
    }
}

