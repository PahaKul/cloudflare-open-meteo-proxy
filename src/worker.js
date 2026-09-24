export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Проксируем запрос к Open-Meteo
    const targetUrl = 'https://api.open-meteo.com' + url.pathname + url.search;

    const resp = await fetch(targetUrl);
    const data = await resp.text();

    return new Response(data, {
      status: resp.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
