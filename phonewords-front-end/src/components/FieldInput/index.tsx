import React, { FC } from 'react';

import './index.scss';

interface IProps {
	placeholder?: string,
	defaultValue?: string,
	onChange: any,
}

const FieldInput: FC<IProps> = ({placeholder = '', defaultValue, onChange}) => {
	return (
		<div className="form-field">
			<input
				type="text"
				value={defaultValue}
				placeholder={placeholder}
				onChange={(e) => onChange(e)}
			/>
		</div>
	)
}

export default FieldInput