import React from 'react';
import '../css/InnerGridLayout.css';
import {Responsive, WidthProvider} from 'react-grid-layout';

const InnerGridLayout = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    const layouts = {
        lg: [
            {x: 0, y: 0, w: 1, h: 1, i: '1',},
            {x: 0, y: 0, w: 1, h: 1, i: '2',},
            {x: 0, y: 0, w: 1, h: 1, i: '3',},
            {x: 0, y: 0, w: 1, h: 1, i: '4',},
        ],
        md: [
            {x: 0, y: 0, w: 1, h: 1, i: '1',},
            {x: 0, y: 0, w: 1, h: 1, i: '2',},
            {x: 0, y: 0, w: 1, h: 1, i: '3',},
            {x: 0, y: 0, w: 1, h: 1, i: '4',},
        ],
        sm: [
            {x: 0, y: 0, w: 1, h: 1, i: '1',},
            {x: 0, y: 0, w: 1, h: 1, i: '2',},
            {x: 0, y: 0, w: 1, h: 1, i: '3',},
            {x: 0, y: 0, w: 1, h: 1, i: '4',},
        ],
        xs: [
            {x: 0, y: 0, w: 1, h: 1, i: '1',},
            {x: 0, y: 0, w: 1, h: 1, i: '2',},
            {x: 0, y: 0, w: 1, h: 1, i: '3',},
            {x: 0, y: 0, w: 1, h: 1, i: '4',},
        ],
        xxs: [
            {x: 0, y: 0, w: 1, h: 2, i: '1',},
            {x: 0, y: 0, w: 1, h: 2, i: '2',},
            {x: 0, y: 0, w: 1, h: 1, i: '3',},
            {x: 0, y: 0, w: 1, h: 1, i: '4',},
        ],
    };
    return (
        <div className="main">
            <ResponsiveGridLayout
                breakpoints={breakpoints}
                cols={cols}
                layouts={layouts}
            >
                <div key="1" className="1">
                    <span className="text">1</span>
                </div>
                <div key="2" className="2">
                    <span className="text">2</span>
                </div>
                <div key="3" className="3">
                    <span className="text">3</span>
                </div>
                <div key="4" className="4">
                    <span className="text">4</span>
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};

export default InnerGridLayout;
