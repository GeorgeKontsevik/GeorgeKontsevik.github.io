// Keep the page shell visible while loading another section of this static site.
let latestNavigation = 0;

async function openSection(url, pushHistory) {
  const navigation = ++latestNavigation;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Page could not be loaded');
    const page = new DOMParser().parseFromString(await response.text(), 'text/html');
    if (navigation !== latestNavigation) return;
    const selector = '#main > .archive, #main > .page';
    const current = document.querySelector(selector);
    const next = page.querySelector(selector);
    if (!current || !next || next.querySelector('script, .language-plotly, .language-mermaid')) {
      throw new Error('Page requires a full load');
    }

    current.replaceWith(next);
    document.title = page.title;
    if (pushHistory) history.pushState(null, '', url);
    const selected = new Set([...page.querySelectorAll('#site-nav li.selected a[href]')].map(a => a.getAttribute('href')));
    document.querySelectorAll('#site-nav a[href]').forEach(a => {
      a.closest('li').classList.toggle('selected', selected.has(a.getAttribute('href')));
    });
    window.scrollTo(0, 0);
  } catch (error) {
    if (navigation === latestNavigation) window.location.assign(url);
  }
}

document.addEventListener('click', event => {
  const link = event.target.closest('#site-nav a[href], #main a[href]');
  if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
  const url = new URL(link.href);
  if (url.origin !== location.origin || url.hash) return;
  if (/\.[^/]+$/.test(url.pathname) && !/\.html?$/.test(url.pathname)) return;
  event.preventDefault();
  if (url.href !== location.href) openSection(url.href, true);
});

window.addEventListener('popstate', () => openSection(location.href, false));
