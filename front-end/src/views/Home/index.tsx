import React, { FC, useCallback, useState } from 'react';
import { BASE_URL } from '../../const/urls';

// orbit.kiwi
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import { Send } from "@kiwicom/orbit-components/icons"
import Alert from "@kiwicom/orbit-components/lib/Alert";
import Button from "@kiwicom/orbit-components/lib/Button";

// own components
import BlurBox from '../../components/BlurBox';
import FieldInput from '../../components/FieldInput';
import KeyboardWrapper from '../../components/KeyboardWrapper';
import Suggestions from '../../components/Suggestions';
import { useFetch } from '../../hooks/useFetch';

const Home: FC = () => {
	const [value, setValue] = useState<string>('');
	const url: string = `${BASE_URL}/phonewords/${value}`;
	const {data, error, getData} = useFetch(url);

	const handleClickKeyboard = useCallback((val: string) => {
		if (val === 'back') {
			setValue(prevState => prevState.slice(0,-1))
			return
		}
		setValue(prevState => prevState + val)
	},[])

	return (
		<div className="wrapper">
			<BlurBox>
				<Card>
					<CardSection>
					<FieldInput
						onChange={(e: any) => setValue(e.target.value)}
						defaultValue={value}
						placeholder="Type"
					/>
					</CardSection>
				</Card>
							

				{data && <Suggestions contents={data} />}
				{error && <Alert type='critical'>{error.message}</Alert>}

				<Button
					disabled={!value}
					role="submit"
					onClick={getData}
				>
					<Send />
				</Button>

				<KeyboardWrapper onClick={handleClickKeyboard} />
			</BlurBox>
		</div>
	)
}

export default Home