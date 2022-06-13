import React, { FC } from 'react';
import kiwiLogo from '../../kiwicom-logo.svg'

import './index.scss';

const Layout: FC = () => (
  <div className="kiwi-layout">
    <img src={kiwiLogo} alt="kiwi" aria-label="kiwi logo" />
  </div>
)

export default React.memo(Layout)