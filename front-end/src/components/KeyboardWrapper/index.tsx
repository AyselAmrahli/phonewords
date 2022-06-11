import React, { FC } from 'react';
import { keyNumbers } from '../../const/constant';

import './index.scss';

interface IProps {
	onClick: any,
}

const KeyboardWrapper: FC<IProps> = ({onClick}) => {
  const keyboardBtns = keyNumbers.map((num: string) => {
    return (
      <button
        className="btn keyboard-wrapper__item"
        key={num}
        onClick={() => onClick(num)}
      >
        {num}
      </button>
    )
  })

	return (
		<div className="keyboard-wrapper">
      {keyboardBtns}
		</div>
	)
}

export default React.memo(KeyboardWrapper)