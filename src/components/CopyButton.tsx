/** @jsx nativeEvents */
import React from 'react';
import '@github/clipboard-copy-element';
import nativeEvents from 'jsx-native-events';

function CopyButton(props: {className?: string; forId: string}) {
    const {
        className = "",
        forId,
    } = props;
    return (
        <clipboard-copy class={className} for={forId} onClipboardCopy={() => {console.log('aaa')}}>
            Copy
            <span className="notice" hidden>Copied!</span>
        </clipboard-copy>
    );
}

export default CopyButton;
