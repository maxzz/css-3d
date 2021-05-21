/** @jsx nativeEvents */
import React from 'react';
import '@github/clipboard-copy-element';
import nativeEvents from 'jsx-native-events';

function CopyButton(props: { className?: string; forId: string; }) {
    const {
        className = "",
        forId,
    } = props;
    return (
        <clipboard-copy class={className} for={forId} onEventClipboardCopy={(event: Event) => {

            const notice = (event.target! as HTMLElement).querySelector('.notice') as HTMLElement;
            notice.hidden = false;
            // setTimeout(function () {
            //     notice.hidden = true;
            // }, 1000);

            console.log('aaa', event);
        }}>
            Copy
            <span className="notice" hidden>Copied!</span>
        </clipboard-copy>
    );
}

export default CopyButton;
