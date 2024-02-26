/**
 * @name ExamplePlugin
 * @author YourName
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class MyPlugin {
  constructor() {
    // Do stuff in here before starting
    this.enabled = false;
  }

  start() {
    // Do stuff when enabled
    this.enabled = true;
    this.addChatButton();
  }

  stop() {
    // Cleanup when disabled
    this.enabled = false;
    this.removeChatButton();
  }

  addChatButton() {
    // Logic to add a button to the chat UI
    if (this.enabled) {
      const chatButton = $("<button/>", {
        text: "My Plugin Button",
        click: this.handleButtonClick.bind(this),
      });

      // Assuming you have a chat container element to append the button
      $(".container-1YxwTf").append(chatButton);
    }
  }

  removeChatButton() {
    // Logic to remove the button from the chat UI
    $(".container-1YxwTf button:contains('My Plugin Button')").remove();
  }

  handleButtonClick() {
    // Logic to handle button click event
    console.log('Button clicked!');
    // You can add more functionality here
  }
};
