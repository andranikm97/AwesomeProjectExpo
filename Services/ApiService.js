const ApiUrl = 'https://color-palette-api.kadikraman.now.sh/palettes';
const ApiClient = {};

ApiClient.getColors = function () {
  return fetchRequest('', {
    method: 'GET',
  });
};

function fetchRequest(path, options) {
  return fetch(ApiUrl + path, options)
    .then((res) => res.json())
    .catch((err) => {
      console.error(
        `Error: ${err}\nIn fetch request from ${path}\nAt ${ApiUrl}`,
      );
    });
}

export default ApiClient;
