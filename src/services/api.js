export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const RESULTADO = await fetch(URL);
  const JSON = await RESULTADO.json();

  return JSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const RESULTADO = await fetch(URL);
  const JSON = await RESULTADO.json();

  return JSON;
}

export async function getProductById(productId) {
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  const RESULTADO = await fetch(URL);
  const JSON = await RESULTADO.json();

  return JSON;
}
