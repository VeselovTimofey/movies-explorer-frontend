const GH_PAGES = true;

function initialRoot(GH_PAGES) {
  if (GH_PAGES) {
    return "/movies-explorer-frontend"
  } else {
    return ""
  }
}

const GH_PAGES_ROOT = initialRoot(GH_PAGES);

export {GH_PAGES_ROOT};