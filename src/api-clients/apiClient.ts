export const get = async (url: string): Promise<unknown> => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(
      `Response code was NOT 200! Got ${response.status} instead.`
    );
  }

  return json;
};
