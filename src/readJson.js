export default async function readJson(source) {
    return await fetch(`${process.env.PUBLIC_URL}${source}`)
      .then((response) => {
        return response.json();
      });
}