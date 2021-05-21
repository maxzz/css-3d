import React from 'react';
import '@github/clipboard-copy-element';

function CopyButton(props: {className?: string; forId: string}) {
    const {
        className = "",
        forId,
    } = props;
    return (
        <clipboard-copy class={className} for={forId}>Copy</clipboard-copy>
    );
}

export default CopyButton;
