import * as routes from '../Router';

const navigaiton = {
  navigateTo({ url }) {
    routes.navigate({
      pageName: url
    });
  },

  redirectTo({ url }) {
    routes.redirect({
      pageName: url
    });
  },

  navigateBack() {
    routes.navigateBack();
  },

  setNavigationBar(params = {}, resolveCallback, rejectCallback) {
    try {
      const headerBar = getHeaderBar();
      const title = headerBar.querySelector('.title');

      if (params.title) {
        title.innerText = params.title;
      }

      if (params.backgroundColor) {
        headerBar.style.backgroundColor = params.backgroundColor;
      }

      if (params.reset) {
        headerBar.style.backgroundColor = 'rgb(255, 255, 255)';
      }
      resolveCallback();
    } catch (e) {
      rejectCallback(e);
    }
  },

  getNavigationBarHeight(params, resolveCallback, rejectCallback) {
    const headerBar = getHeaderBar();
    resolveCallback({
      height: headerBar ? headerBar.clientHeight : 0
    });
  }

};

function getHeaderBar() {
  return document.querySelector('#headerBar');
}

export default navigaiton;
