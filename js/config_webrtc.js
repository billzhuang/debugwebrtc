// Disable WebRTC by default.
let isEnabled = false;
toggleWebRTC(isEnabled);

// Handle clicks on the action button.
browser.browserAction.onClicked.addListener(handleClick);

/**
 * Toggles WebRTC on and off.
 * @param {boolean=} enable
 */
function toggleWebRTC(enable = true) {
  // Update setting.
  browser.privacy.network.webRTCIPHandlingPolicy.set(
    { value: enable ? 'default_public_interface_only' : 'disable_non_proxied_udp' });

  // Update title.
  const title = enable ?
    'Default behavior.' :
    'Coporate behavior.';
  browser.browserAction.setTitle({ title });

  // Update icon.
  const name = enable ? 'unsafe' : 'safe';
  const path = `images/${name}-48.png`;
  browser.browserAction.setIcon({ path });
}

/** Handles clicks on the action button. */
function handleClick() {
  isEnabled = !isEnabled;
  toggleWebRTC(isEnabled);
}
