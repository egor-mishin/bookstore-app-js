class  App {
	routes= [
		{path: "", view: null}
	]
	constructor() {
		window.addEventListener('hashchange', this.route.bind(this));
	}

	route() {
		const view = this.routes.find(r=> r.path === location.hash)
	}
}

new App();
