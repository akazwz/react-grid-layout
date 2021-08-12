import React, {useState} from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import '../css/Homepage.css';
import 'react-grid-layout/css/styles.css'; // 导入样式后可以调整大小
import 'react-resizable/css/styles.css';
import InnerGridLayout from '../components/InnerGridLayout';

const Homepage = (props) => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const layouts = {
        lg: [
            {x: 0, y: 0, w: 3, h: 2, i: 'a',},
            {x: 3, y: 0, w: 3, h: 2, i: 'b',},
            {x: 6, y: 0, w: 3, h: 2, i: 'c',},
        ],
        md: [
            {x: 0, y: 0, w: 10, h: 2, i: 'a',},
            {x: 0, y: 2, w: 10, h: 2, i: 'b',},
            {x: 0, y: 2, w: 10, h: 2, i: 'c',},
        ],
        sm: [
            {x: 0, y: 0, w: 6, h: 4, i: 'a',},
            {x: 0, y: 6, w: 6, h: 4, i: 'b',},
            {x: 0, y: 9, w: 6, h: 4, i: 'c',},
        ],
        xs: [
            {x: 0, y: 0, w: 4, h: 4, i: 'a',},
            {x: 0, y: 6, w: 4, h: 4, i: 'b',},
            {x: 0, y: 9, w: 4, h: 4, i: 'c',},
        ],
        xxs: [
            {x: 0, y: 0, w: 2, h: 4, i: 'a',},
            {x: 0, y: 6, w: 2, h: 4, i: 'b',},
            {x: 0, y: 9, w: 2, h: 4, i: 'c',},
        ],
    };

    let currentLayoutsLocal = JSON.parse(localStorage.getItem('layouts'));
    if (!currentLayoutsLocal) {
        currentLayoutsLocal = layouts
    }

    const [currentBreakpoint, setCurrentBreakpoint] = useState('xxs');
    const [currentLayouts, setCurrentLayouts] = useState(currentLayoutsLocal);

    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    const handleOnBreakpointChange = (breakpoint) => {
        setCurrentBreakpoint(breakpoint);
    };
    const handleOnLayoutChange = (layout) => {
        let localLayouts = JSON.parse(JSON.stringify(layouts));
        delete (localLayouts[currentBreakpoint.toString()]);
        localLayouts[currentBreakpoint.toString()] = layout;
        localStorage.setItem('layouts', JSON.stringify(localLayouts));
    };
    const handleOnDrop = (eleParams) => {
        console.log('on drop:' + eleParams);
    };
    const handleBtnResetClick = () => {
        setCurrentLayouts(layouts);
    };
    return (
        <>
            <button onClick={handleBtnResetClick}>reset</button>
            <ResponsiveGridLayout
                breakpoints={breakpoints}
                cols={cols}
                layouts={currentLayouts}
                onBreakpointChange={handleOnBreakpointChange}
                onLayoutChange={handleOnLayoutChange}
                onDrop={handleOnDrop}
            >
                <div key="a" className="a">
                    {/*<span className="text">a</span>*/}
                    <InnerGridLayout/>
                </div>
                <div key="b" className="b">
                    <span className="text">b</span>
                </div>
                <div key="c" className="c">
                    <span className="text">c</span>
                </div>
            </ResponsiveGridLayout>
        </>
    );
};

export default Homepage;
