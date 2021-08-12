import React from 'react';
import '../css/InnerGridLayout.css';
import {Responsive, WidthProvider} from 'react-grid-layout';

const InnerGridLayout = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2};
    const breakpoints = {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0};
    return (
        <div className="main">
            <ResponsiveGridLayout
                breakpoints={breakpoints}
                cols={cols}
                compactType="horizontal"
            >
            </ResponsiveGridLayout>
        </div>

    );
};

export default InnerGridLayout;
