export const getAllFiles = async () => {
  const response = await fetch(
    "https://api.github.com/repos/Mert18/hackerrank-js/contents"
  );
  const files = response.json();

  return files;
};

export const getSingleFile = async (file: any) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/mert18/hackerrank-js/master/${file}`
  );
  const fileContent = response.text();

  return fileContent;
};
