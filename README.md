React Calculator App
This is a fully functional calculator app built using React, featuring a clean and intuitive user interface. The app allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.

The app architecture includes two custom hooks to ensure modularity and separation of concerns:

useCalculation.js: This custom hook is responsible for handling all the core calculator functionalities. It manages the input values, operators, and computes the final results. By isolating the calculation logic within this hook, the app maintains a clean separation between the UI and the underlying business logic.

useKeyboard.js: This custom hook is designed to create the calculator’s keyboard structure. It dynamically generates the buttons for numbers, operators, and special functions (like reset or clear), ensuring the interface is both responsive and reusable.

The app effectively demonstrates the power of React hooks, making it a great example of how to build scalable, maintainable React applications.
