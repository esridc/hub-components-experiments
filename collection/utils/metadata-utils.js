export async function getMetadataSpec(_url) {
  try {
    const result = await fetch(_url);
    const sections = await result.json();
    console.log("getMetadataSpec: sections", sections);
    return sections;
  }
  catch (error) {
    if (error) {
      return error.message;
    }
  }
}
