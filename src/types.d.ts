import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'clipboard-copy': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                class: string;
                for: string;
            }, HTMLElement>;
        }
    }
}
