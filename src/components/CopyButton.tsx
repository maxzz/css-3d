import React from 'react';
import '@github/clipboard-copy-element';

function CopyButton(props: {forId: string}) {
    return (
        <clipboard-copy for={props.forId}>Copy</clipboard-copy>
    );
}

export default CopyButton;
