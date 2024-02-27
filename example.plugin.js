/**
 * @name BackgroundColorChanger
 * @author YourName
 * @description A BetterDiscord plugin that changes the background color to white.
 * @version 0.0.1
 */

module.exports = class BackgroundColorChanger {
    start() {
        // Called when the plugin is activated (including after reloads)
        this.addButton();
    }

    stop() {
        // Called when the plugin is deactivated
        this.removeButton();
    }

    addButton() {
        const serverList = document.querySelector('.guilds-1SWlCJ');
        if (!serverList) return;

        const button = document.createElement('button');
        button.textContent = 'Change Background Color';
        button.addEventListener('click', this.handleButtonClick.bind(this));

        serverList.appendChild(button);
    }

    removeButton() {
        const button = document.querySelector('.guilds-1SWlCJ button:contains("Change Background Color")');
        if (button) {
            button.remove();
        }
    }

    handleButtonClick() {
        document.body.style.backgroundColor = 'white';
        BdApi.alert('Background Color Changed', 'The background color has been changed to white.');
    }
};
