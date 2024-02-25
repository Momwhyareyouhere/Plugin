//META{"name":"BackgroundColorChanger"}*//

class BackgroundColorChanger {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "BackgroundColorChanger"; }
    getShortName() { return "BGCChanger"; }
    getDescription() { return "A BetterDiscord plugin to change the background color to white."; }
    getVersion() { return "1.0.0"; }
    getAuthor() { return "YourName"; }

    // Settings Panel
    getSettingsPanel() {
        return "<!--Enter Settings Panel Options, just standard HTML-->";
    }

    // Load/Unload
    load() {
        this.addStyle();
    }

    unload() {
        this.removeStyle();
    }

    // Events

    onMessage() {
        // Called when a message is received
    };

    onSwitch() {
        // Called when a server or channel is switched
    };

    observer(e) {
        // raw MutationObserver event for each mutation
    };

    // Start/Stop
    start() {
        this.initialize();
    }

    stop() {
        this.removeStyle();
        BdApi.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    }

    // Initialize
    initialize() {
        this.initialized = true;
        BdApi.showToast(this.getName() + " " + this.getVersion() + " has started.");
    }

    // Add custom styles
    addStyle() {
        const styleId = 'background-color-changer-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = 'body { background-color: white !important; }';
            document.head.appendChild(style);
        }
    }

    // Remove custom styles
    removeStyle() {
        const style = document.getElementById('background-color-changer-style');
        if (style) {
            style.remove();
        }
    }
}

