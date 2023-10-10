# Software Engineering
The repository contains the results of the Laboratory work № 5 for the course "Software Engineering" (2022) during studies at National Technical University "Kharkiv Polytechnic Institute".

# Overview
The subject "Software Engineering" devoted to software engineering as one of the main activities in software projects, the study of basic methods and tools of software engineering in a systematic form for their application in the processes of analysis, design and testing of software systems.

# Laboratory Training # 5 "Testing of code"
**Goal:** Learning basic principles of testing in С++/TypeScript code.

### Tasks:

  1. Study principles of using functions in a programming language. 
  2. Study Exception Handling in a programming language. 
  3. Modify the code from lab 3 according to the 1 and 2 tasks. 
  4. Implement unit testing for the developed program. 
  5. Make all necessary actions on GitHub. Show the iteration where you made updating information. 
  6. Prepare the report of the work.


### Task description

Develop software to find the values of of the expression that was given in the previous laboratory work using the programming language C++. The value must be found on a certain interval, which is specified by the user. The value must be printed with a given step.

Condition of the individual task of variant 9:

![Variant9](https://github.com/InessaRepeshko/software-engineering/assets/80609514/0f93e612-cadf-4f09-ace9-f8dcaa06f4cc)

The function “Calculate” shows how to calculate value on definite range of expression. This expression has one specific condition: the value of n should be greater than 4. This constraint was developed in function “checkValidParams”. If user enter incorrect value for n and x , for example, character or double value, then program should generate exception. These cases are reflected in the function “checkValidInput”.

### Solution

The program code implementation is developed using the TypeScript programming language, and the “jest” library was used for Unit-testing.

Install
```
npm install
```

Run by npm with mock-data
```
npm run start:txt

OR

npm run start:csv
```

Run with custom data
```
tsc && node dist/src/main.js [start] [end] [step] [numberOfIterations] --saveToFile=[txt|csv]
```

Run tests
```
npm run test
```

The results of running unit tests with the “npm test” command, which executes the “tsc && jest --config dist/jest.config.js” command, are shown below. The expected result of the test runs is “pass”.

![test_result_pass](https://github.com/InessaRepeshko/software-engineering/assets/80609514/3809f1b1-ed2e-4418-9804-289ce86fdbe9)

The results of running unit tests with the changes made to verify the unit tests are shown in Figure 2. The expected result of the test runs is “fail”.

![test_result_fail](https://github.com/InessaRepeshko/software-engineering/assets/80609514/47932de0-cb98-404d-96f7-42a689c5dc51)




© Inessa Repeshko. 2022
