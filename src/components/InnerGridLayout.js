import React from 'react';
import '../css/InnerGridLayout.css';
import {Responsive, WidthProvider} from 'react-grid-layout';

const InnerGridLayout = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    const layouts = {
        lg: [
            {x: 0, y: 0, w: 1, h: 2, i: 'one',},
            {x: 0, y: 0, w: 1, h: 2, i: 'two',},
            {x: 0, y: 0, w: 1, h: 1, i: 'three',},
            {x: 0, y: 0, w: 1, h: 1, i: 'four',},
        ],
        md: [
            {x: 0, y: 0, w: 1, h: 2, i: 'one',},
            {x: 0, y: 0, w: 1, h: 2, i: 'two',},
            {x: 0, y: 0, w: 1, h: 1, i: 'three',},
            {x: 0, y: 0, w: 1, h: 1, i: 'four',},
        ],
        sm: [
            {x: 0, y: 0, w: 1, h: 2, i: 'one',},
            {x: 0, y: 0, w: 1, h: 2, i: 'two',},
            {x: 0, y: 0, w: 1, h: 1, i: 'three',},
            {x: 0, y: 0, w: 1, h: 1, i: 'four',},
        ],
        xs: [
            {x: 0, y: 0, w: 2, h: 2, i: 'one',},
            {x: 0, y: 0, w: 2, h: 2, i: 'two',},
            {x: 0, y: 0, w: 1, h: 1, i: 'three',},
            {x: 0, y: 0, w: 1, h: 1, i: 'four',},
        ],
        xxs: [
            {x: 0, y: 0, w: 1, h: 2, i: 'one',},
            {x: 0, y: 0, w: 1, h: 2, i: 'two',},
            {x: 0, y: 0, w: 1, h: 1, i: 'three',},
            {x: 0, y: 0, w: 1, h: 1, i: 'four',},
        ],
    };
    return (
        <ResponsiveGridLayout
            breakpoints={breakpoints}
            cols={cols}
            layouts={layouts}
        >
            <div key="one" className="one">
                <span className="text">one</span>
            </div>
            <div key="two" className="two">
                <span className="text">two</span>
            </div>
            <div key="three" className="three">
                <span className="text">three</span>
            </div>
            <div key="four" className="four">
                <span className="text">four</span>
            </div>
        </ResponsiveGridLayout>
    );
};

export default InnerGridLayout;
