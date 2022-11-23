import {printResult, readVariablesArgs} from "./index";

try {
    printResult(readVariablesArgs())
} catch (error) {
    console.error(error);
}
