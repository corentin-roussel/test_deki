import { useState } from 'react';
import { getHelloWorld } from './routes/helloWorld';
import { getUserList } from './routes/userList';
import { Button, Layout, Space } from 'antd';
import { headerStyle, contentStyle } from './styles/app.style';
import InfoModal from './components/InfoModal';
import Typography from 'antd/es/typography/Typography';

export default function App() {
	const [message, setMessage] = useState('');
	const [userList, setData] = useState([]);
	const { Header, Content } = Layout;

	const displayList = async () => {
		const datas = await getUserList();

		setData(datas);
	}

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
				<Button type="primary"	onClick={displayList}>

				</Button>
			</Layout>
		</Space>
	);
}
