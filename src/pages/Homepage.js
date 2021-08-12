import React, {useState} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import '../Homepage.css';
import 'react-grid-layout/css/styles.css'; // 导入样式后可以调整大小
import 'react-resizable/css/styles.css';

const Homepage = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);

    const layouts = {
        lg: [
            {x: 0, y: 0, w: 3, h: 2, i: 'a',},
            {x: 3, y: 0, w: 3, h: 2, i: 'b',},
            {x: 6, y: 0, w: 3, h: 2, i: 'c',},
        ],
        md: [
            {x: 0, y: 0, w: 5, h: 2, i: 'a',},
            {x: 0, y: 2, w: 5, h: 2, i: 'b',},
            {x: 0, y: 2, w: 5, h: 2, i: 'c',},
        ],
        sm: [
            {x: 0, y: 0, w: 3, h: 2, i: 'a',},
            {x: 0, y: 2, w: 3, h: 2, i: 'b',},
            {x: 5, y: 2, w: 3, h: 2, i: 'c',},
        ],
        xs: [
            {x: 0, y: 0, w: 4, h: 3, i: 'a',},
            {x: 0, y: 6, w: 4, h: 3, i: 'b',},
            {x: 0, y: 9, w: 4, h: 3, i: 'c',},
        ],
        xxs: [
            {x: 0, y: 0, w: 2, h: 3, i: 'a',},
            {x: 0, y: 6, w: 2, h: 3, i: 'b',},
            {x: 0, y: 9, w: 2, h: 3, i: 'c',},
        ],
    };

    let currentLayoutsLocal = JSON.parse(localStorage.getItem('layouts'));
    if (!currentLayoutsLocal) {
        currentLayoutsLocal = layouts
    }

    const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');
    const [currentLayouts, setCurrentLayouts] = useState(currentLayoutsLocal);

    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    const handleOnBreakpointChange = (breakpoint) => {
        console.log('breakpoint: ' + breakpoint);
        setCurrentBreakpoint(breakpoint);
        console.log('current breakpoint: ' + currentBreakpoint);
    };
    const handleOnLayoutChange = (layout) => {
        for (let i = 0; i < layout.length; i++) {
            console.log('layout: x:' + layout[i].x);
            console.log('layout: y:' + layout[i].y);
            console.log('layout: w:' + layout[i].w);
            console.log('layout: h:' + layout[i].h);
            console.log('layout: i:' + layout[i].i);
        }
        delete (layouts[currentBreakpoint.toString()]);
        layouts[currentBreakpoint.toString()] = layout;
        localStorage.setItem('layouts', JSON.stringify(layouts));
    };
    const handleOnDrop = (eleParams) => {
        console.log('on drop:' + eleParams);
    };
    return (
        <>
            <ResponsiveGridLayout
                breakpoints={breakpoints}
                cols={cols}
                layouts={currentLayouts}
                onBreakpointChange={handleOnBreakpointChange}
                onLayoutChange={handleOnLayoutChange}
                onDrop={handleOnDrop}
            >
                <div key="a" className="a">a</div>
                <div key="b" className="b">b</div>
                <div key="c" className="c">c</div>
            </ResponsiveGridLayout>
        </>
    );
};

export default Homepage;
