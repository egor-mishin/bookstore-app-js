export class AbstractView {
    constructor() {
        this.app = document.getElementById('root') // Create a root html element
    }
    setTitle(title) {
        document.title = title;
    }
// Render method
    render() {
        return;
    }
// Destroy method
    destroy() {
        return;
    }
}
