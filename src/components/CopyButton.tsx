import React from 'react';
import '@github/clipboard-copy-element';

function CopyButton(props: {forId: string}) {
    return (
        <div>
            <clipboard-copy for={props.forId}>Copy</clipboard-copy>
        </div>
    );
}

export default CopyButton;
