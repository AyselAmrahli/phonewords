import React, { FC } from 'react';

import './index.scss';

interface IProps {
    children: any,
}

const BlurBox: FC<IProps> = ({children}) => {
	return (
		<div className="blur-box">
			{children}
		</div>
	)
}

export default BlurBox