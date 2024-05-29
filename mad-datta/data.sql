CREATE TABLE dataset (
    id serial PRIMARY KEY,
    columnCount INTEGER NOT NULL
);

CREATE TABLE dataColumn (
    id SERIAL PRIMARY KEY,
    columnData TEXT[] NOT NULL,
    header TEXT NOT NULL,
    dataType TEXT NOT NULL, 
    dataOptions TEXT[]
);

CREATE TABLE datasets_columns (
    dataset_id INTEGER NOT NULL REFERENCES dataset,
    dataColumn_id INTEGER NOT NULL REFERENCES dataColumn,
    PRIMARY KEY(dataset_id,dataColumn_id)
);