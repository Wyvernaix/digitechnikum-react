export function navigateTo(path: string) {
  // - Interne Links wechseln die URL ohne kompletten Seitenneuladen.
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
