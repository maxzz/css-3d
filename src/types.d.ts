import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'clipboard-copy': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                class: string;
                for: string;
                onEventClipboardCopy: (event: Event) => void
            }, HTMLElement>;
        }
    }
}

// declare module 'jsx-native-events' {
//     // import nativeEvents from 'jsx-native-events';
//     // export default nativeEvents;    
// }
