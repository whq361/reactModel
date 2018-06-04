import React from 'react';
import ReactDom from 'react-dom';
import { hot ,setConfig} from 'react-hot-loader';

import getRouter from 'router/router';
setConfig({ logLevel: 'debug' })
if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    getRouter(),
    document.getElementById('app')
);