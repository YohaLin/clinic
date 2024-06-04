module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  preset: "ts-jest",
  // 會去找符合檔名的檔案
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // jest 會默認不處理 svg 檔案，所以加入 mock
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/fileMock.js",
  },
  // 會出現這行錯誤 The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.  Consider using the "jsdom" test environment.
  testEnvironment: "jsdom",
};
