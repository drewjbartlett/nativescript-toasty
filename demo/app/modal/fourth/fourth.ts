import { Toasty } from 'nativescript-toasty';
import { topmost } from 'ui/frame';

export function modalToast() {
    new Toasty({
        text: 'Fourth Toast'
    }).show();
}

export function navigate() {
}

export function close(args) {
    args.object.closeModal()
}
