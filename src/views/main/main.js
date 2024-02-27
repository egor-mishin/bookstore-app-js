import {AbstractView} from "../../common/view.js";
import onChange from  "on-change";

export class MainView extends AbstractView {
    state= {
        list: [],
        searchQuery: undefined,
        loading: false,
        offset: 0

    }
    constructor(appState) {
        super();
        this.appState = appState
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle('Book search');
    }

    appStateHook(path) {
       if(path === 'favorites') {
           console.log(path)
       }
    }
    render() {
        const main = document.createElement('div')
        main.innerHTML = `Число книг:${this.appState.favorites.length}`;
        this.app.append(main);
        this.appState.favorites.push('d')

    }
}
