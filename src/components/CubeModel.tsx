import React from 'react';
import { CubeModelProps, getCubeParentStyles } from '../utils/cube-defs';
import './CubeModel.scss';

function CubeModel(props: CubeModelProps) {
    //const styles = getCubeStyles(props)
    return (
        <div className="cube" style={getCubeParentStyles(props)}>
            <div className="cube__f"></div> {/* _front_ */}
            <div className="cube__l"></div> {/* _left__ */}
            <div className="cube__t"></div> {/* _top___ */}
            <div className="cube__b"></div> {/* _bottom */}
            <div className="cube__r"></div> {/* _right_ */}
            <div className="cube__k"></div> {/* _back__ */}

            <div className="cube__r" style={{
                //...styles.r,
                width: '500px',
                height: '500px',

                background: 'transparent',
                borderBottom: '3px solid blue',
                borderLeft: '3px solid green'
            }}>
            </div> {/* _right_ */}

            <div className="cube__k" style={{
                //...styles.k,
                width: '500px',
                height: '500px',

                background: 'transparent',
                borderBottom: '3px solid red'
            }}>
            </div> {/* _back__ */}
        </div>
    );
}

export default CubeModel;
