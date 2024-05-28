# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# capstone-2

The overall idea:

- An app that takes in a tsv file and allows someone to conduct various forms of data analysis on it really easily.

General flow:

1. Import tsv file
2. App reads the first line of the file and determines the number of columns
3. User sets the data type for each column
   If string, then selects the total number of options for it.
4. App reads the file and sorts data into database
5. User selects analysis to perform
6. App performs analysis and generates simple visualization of the data.
