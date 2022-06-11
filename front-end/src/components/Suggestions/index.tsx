import React, { FC } from 'react';

import Box from "@kiwicom/orbit-components/lib/Box";
import Tag from "@kiwicom/orbit-components/lib/Tag";

interface IProps {
	contents: Array<string>,
}

const Suggestions: FC<IProps> = ({contents}) => {
  
  const suggests = contents.map((sug: string) => <div style={{margin: '0 3px'}} key={sug}><Tag>{sug}</Tag></div>)

	return (
		<Box overflow='auto' >
			<div style={{display: 'flex', padding: '20px 0', cursor: 'all-scroll'}}>
				{suggests}
			</div>
		</Box>
	)
}

export default React.memo(Suggestions)