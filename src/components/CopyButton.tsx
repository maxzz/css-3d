import React, { useEffect, useRef } from 'react';
import '@github/clipboard-copy-element';

function CopyButton(props: { className?: string; forId: string; }) {
    const {
        className = "",
        forId,
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        function copied(event: Event) {
            const notice = (event.target! as HTMLElement).querySelector('.notice') as HTMLElement;
            notice.hidden = false;
            setTimeout(() => notice.hidden = true, 1000);
        }
        ref.current?.addEventListener('clipboard-copy', copied, false);
        return () => {
            ref.current?.removeEventListener('clipboard-copy', copied, false);
        }
    }, [ref.current]);
    return (
        <clipboard-copy ref={ref} class={`${className} relative select-none`} for={forId}>
            Copy
            <div className="notice px-2 py-1 absolute top-1/2 left-[-230%] transform -translate-y-1/2 rounded bg-green-600 text-green-100 text-xs" hidden>Copied!</div>
        </clipboard-copy>
    );
}

export default CopyButton;
