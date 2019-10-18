import Plugin from 'src/script/plugin-system/plugin.class';
import HttpClient from 'src/script/service/http-client.service';
import LoadingIndicator from 'src/script/utility/loading-indicator/loading-indicator.util';

export default class InstagramPlugin extends Plugin {
    static options = {
        /**
         * how many media should be returned
         *
         * @type number
         */
        count: 5,
    };

    init() {
        this.el.innerHTML = LoadingIndicator.getTemplate();

        this._client = new HttpClient(window.accessKey);

        this.fetch();

    }

    /**
     * Fetch the latest media from the Instagram account with the given count
     */
    fetch() {
        this._client.get(`/sales-channel-api/v1/sns/instagramfeed?media=${this.options.count}`, (responseText) => {
            this.el.outerHTML = responseText;
        });
    }

    /*
     * Removes the generated image from the DOM
     */
    destroy() {
        this.el.lastChild.remove();
    }
}
