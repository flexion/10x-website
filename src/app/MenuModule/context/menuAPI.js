/* istanbul ignore file */
const timeout = (t = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

export const getAllMenus = async (props = {}) => {
  await timeout();
  const response = await fetch(
    `${process.env.PUBLIC_URL}/settings/menu/index.json`
  );
  const data = await response.json();
  return data;
};
