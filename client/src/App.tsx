import { useState } from 'react';
import { getHelloWorld } from './routes/helloWorld';
import { Button, Layout, Space } from 'antd';
import { headerStyle, contentStyle } from './styles/app.style';
import InfoModal from './components/InfoModal';
import Typography from 'antd/es/typography/Typography';

export default function App() {
	const [message, setMessage] = useState('');
	const { Header, Content } = Layout;

	const sayHello = async () => {
		const message = await getHelloWorld();

		setMessage(message);
	};

	return (
		<Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
			<Layout>
				<Header style={headerStyle}>
					<Button type="primary" onClick={sayHello}>
						{message ? message : 'Example'}
					</Button>
					<Typography>Deki - Technical test</Typography>
					<InfoModal />
				</Header>
				<Content style={contentStyle}>Add the user list.</Content>
			</Layout>
		</Space>
	);
}
