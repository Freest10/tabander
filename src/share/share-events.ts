import events = require('add-event-listener');

export class ShareEvents {
    public static clickOrTouchDocument(callbak: any) {
        events.addEventListener(document, 'click', function (event) {
            callbak(event);
        });

        events.addEventListener(document, 'touchstart', function (event) {
            callbak(event);
        })
    }
}