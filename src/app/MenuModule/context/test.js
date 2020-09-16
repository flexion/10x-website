/* istanbul ignore file */

const testData = [
  {
    key: "primary",
    title: "Primary Menu",
    items: [
      { url: "/about", text: "About 10x" },
      { url: "/ideas", text: "Send us an idea" },
      { url: "/process", text: "The 10x process" },
      { url: "/projects", text: "The projects" },
    ],
  },
];

export const getAllMenus = async (props) => {
  if (props.error) {
    throw new Error("Invalid Props.");
  }

  return testData;
};
