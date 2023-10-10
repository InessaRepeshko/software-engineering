# Software Engineering
The repository contains the results of the Laboratory work № 5 for the course "Software Engineering" (2022) during studies at National Technical University "Kharkiv Polytechnic Institute".

# Overview
The subject "Software Engineering" devoted to software engineering as one of the main activities in software projects, the study of basic methods and tools of software engineering in a systematic form for their application in the processes of analysis, design and testing of software systems.


### Install
```
npm install
```

### Run by npm with mock-data
```
npm run start:txt

OR

npm run start:csv
```

### Run with custom data
```
tsc && node dist/src/main.js [start] [end] [step] [numberOfIterations] --saveToFile=[txt|csv]
```

### Run tests
```
npm run test
```

© Inessa Repeshko. 2022
