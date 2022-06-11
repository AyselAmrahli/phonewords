import React, { FC } from 'react';
import kiwiLogo from '../../kiwicom-logo.svg'

import './index.scss';

const Layout: FC = () => (
  <div className="kiwi-layout">
    <img src={kiwiLogo} alt="kiwi" />
  </div>
)

export default React.memo(Layout)