//META{"name":"Example"}*//

class Example {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "Example"; }
    getShortName() { return "Example"; }
    getDescription() { return "This is an example/template for a BD plugin."; }
    getVersion() { return "0.1.0"; }
    getAuthor() { return "Minin"; }

    // Settings  Panel
    getSettingsPanel() {
        return "<!--Enter Settings Panel Options, just standard HTML-->";
    }
    
    // Load/Unload
    load() { }

    unload() { }

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
        var libraryScript = document.getElementById('zeresLibraryScript');
        if (!libraryScript) {
            libraryScript = document.createElement("script");
            libraryScript.setAttribute("type", "text/javascript");
            libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
            libraryScript.setAttribute("id", "zeresLibraryScript");
            document.head.appendChild(libraryScript);
        }

        if (typeof window.ZeresLibrary !== "undefined") this.initialize();
        else libraryScript.addEventListener("load", () => { this.initialize(); });
    }
       
    stop() {
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
        this.removeStyle(); // Remove the added style when stopping the plugin
    };

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
        this.addStyle(); // Add the custom style when initializing the plugin
    }

    // Add custom styles
    addStyle() {
        const styleId = 'example-plugin-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = 'body { background-color: lightblue !important; }'; // Change the color as needed
            document.head.appendChild(style);
        }
    }

    // Remove custom styles
    removeStyle() {
        const style = document.getElementById('example-plugin-style');
        if (style) {
            style.remove();
        }
    }
}
