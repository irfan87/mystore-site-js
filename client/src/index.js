import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Error404Screen from './screens/Error404Screen';
import { parseRequestUrl } from './utils';

const routes = {
	'/': HomeScreen,
	'/product/:id': ProductScreen,
};

const router = async () => {
	const request = parseRequestUrl();
	const parseUrl =
		(request.resource ? `/${request.resource}` : '/') +
		(request.id ? '/:id' : '') +
		(request.verb ? `/${request.verb}` : '');

	const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

	const main = document.querySelector('#main__container');

	main.innerHTML = await screen.render();
	if (screen.after_render) await screen.after_render();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
