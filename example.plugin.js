/**
 * @name test
 * @author notanymorealive
 * @description test
 * @version 0.0.1
 */

module.exports = class MyPlugin {
  constructor(meta) {
    // Do setup and initialization here
    this.meta = meta;
    this.isEnabled = false;
  }

  /**
   * Start the plugin.
   */
  start() {
    // Check if already enabled
    if (this.isEnabled) {
      console.warn('Plugin is already enabled.');
      return;
    }

    // Perform actions to start the plugin
    // ...

    // Update state
    this.isEnabled = true;

    console.log('Plugin is now enabled.');

    // BDPI Alert
    this.bdpiAlert('Plugin is now enabled.');
  }

  /**
   * Stop the plugin.
   */
  stop() {
    // Check if already disabled
    if (!this.isEnabled) {
      console.warn('Plugin is already disabled.');
      return;
    }

    // Perform cleanup actions
    // ...

    // Update state
    this.isEnabled = false;

    console.log('Plugin is now disabled.');

    // BDPI Alert
    this.bdpiAlert('Plugin is now disabled.');
  }

  /**
   * BDPI Alert method.
   * @param {string} message - The message to be alerted.
   */
  bdpiAlert(message) {
    // Replace this with the actual alert mechanism you want to use
    // For example, in a browser environment, you might use window.alert(message)
    console.log(`BDPI Alert: ${message}`);
  }
};
