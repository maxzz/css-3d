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
            setTimeout(function () {
                notice.hidden = true;
            }, 1000);

            console.log('bbb', event);
        }
        console.log('ccc');
        ref.current?.addEventListener('clipboard-copy', copied, false);
        return () => {
            console.log('ddd');
            ref.current?.removeEventListener('clipboard-copy', copied, false);
        }
    }, [ref.current]);
    return (
        <clipboard-copy ref={ref} class={className} for={forId}>
            Copy
            <span className="notice" hidden>Copied!</span>
        </clipboard-copy>
    );
}

export default CopyButton;
