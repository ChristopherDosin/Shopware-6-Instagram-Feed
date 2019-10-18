// Import all necessary Storefront plugins and scss files
import InstagramPlugin from './instagram-plugin/instagram-plugin.plugin';

// Register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('InstagramPlugin', InstagramPlugin, '[data-instagram-plugin]');

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}
