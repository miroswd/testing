const { error } = require("./src/constants");
const File = require("./src/file");
const { rejects, deepStrictEqual } = require("assert"); // rejects espera uma promisse rejeitada

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }
  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);

    // converter o csv pra json -> https://csvjson.com/csv2json
    const expected = [
      {
        id: 123,
        name: "miro",
        profession: "dev",
        birthDay: 2000,
      },
      {
        id: 321,
        name: "xuxa",
        profession: "js dev",
        birthDay: 1932,
      },
      {
        id: 312,
        name: "jota",
        profession: "java",
        birthDay: 1982,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
