import h from 'react-hyperscript';
import { UxtSidebar } from 'uxt-react';


import React from 'react';
export default class Home extends React.Component {
    render() {
        return (
            h('div', [
                h('.uxt-main',[
                h('h3', 'Arun')
            ])
            ])

        );
    }
}

