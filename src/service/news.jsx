import {
  articles_url,
  country_code,
  category,
  apiKey,
  language,
} from "../config/rest_config.jsx";

export async function getArticles(cat) {
  try {
    let articles = await fetch(
      `${articles_url}country=${country_code}&category=${cat}&language=${language}`,
      {
        headers: {
          "X-API-KEY": apiKey,
        },
      }
    );
    const result = await articles.json();
    return result.articles;
  } catch (error) {
    throw error;
  }
}
