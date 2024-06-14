# Capstone Project #2

This is a simple web application that allows for quick and easy data visualization. It operates by reading a `.tsv` file, parsing the data by column, and then providing you options to select columns, run various analysis on them via a server-side api, and then display the results as responsive and easy to understand charts. For simplicity and speed, it is state-based and database free.

## Documentation

### File Structure

The `.tsv` file containing your data should be formatted in columns, with the top row functioning as headers.

### Column Data Types

Each column is parsed and assigned a data type. If no single data type is found in a column, then it is assigned the `string` type.

| Type     | Format           |
| -------- | ---------------- |
| `Number` | `Int` or `Float` |
| `Date`   | `YYYY-MM-DD`     |
| `String` | anything         |

### Analysis Options

####
