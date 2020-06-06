import React, { useState, useEffect } from 'react';
import { Feather as Icon, AntDesign } from '@expo/vector-icons';
import { StyleSheet, ImageBackground, View, Image, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface IBGEUFResponse {
	sigla: string;
}

interface IBGECityResponse {
	nome: string;
}

interface Item {
	label: string,
	value: string
}

const Home: React.FC = () => {

	const [ufs, setUfs] = useState<Item[]>([]);
	const [cities, setCities] = useState<Item[]>([]);

	const [selectedUf, setSelectedUf] = useState('0');
	const [selectdCity, setSelectdCity] = useState('0');

	const navigation = useNavigation();


	useEffect(() => {
		axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then(response => {

				const ufInitias: Item[] = response.data.map(uf => ({
					label: uf.sigla,
					value: uf.sigla
				}))


				setUfs(ufInitias);
			});
	}, []);


	useEffect(() => {
		if (selectedUf === '0') {
			return;
		}

		axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
			.then(response => {

				const cityNames: Item[] = response.data.map(city => ({
					label: city.nome,
					value: city.nome
				}))

				setCities(cityNames);
			});

	}, [selectedUf])


	function handleNavigateToPoints() {
		navigation.navigate('Points', {
			selectedUf,
			selectdCity
		});
	}

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

			<ImageBackground
				source={require('../../assets/home-background.png')}
				style={styles.container}
				imageStyle={{ width: 274, height: 368 }}
			>
				<View style={styles.main}>
					<Image source={require('../../assets/logo.png')} />
					<View>
						<Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
						<Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
					</View>
				</View>

				<View style={styles.footer}>

					<RNPickerSelect
						onValueChange={(value) => setSelectedUf(value)}
						placeholder={{ label: 'Selecione uma UF'}}
						useNativeAndroidPickerStyle={false}
						value={selectedUf}
						style={{ ...pickerSelectStyles }}
						items={ufs}
						Icon={() => (<AntDesign name="down" size={20} color="#A0A0B2" />)}
					/>

				<RNPickerSelect
						onValueChange={(value) => setSelectdCity(value)}
						placeholder={{ label: 'Selecione uma Cidade'}}
						useNativeAndroidPickerStyle={false}
						value={selectdCity}
						style={{ ...pickerSelectStyles }}
						items={cities}
						Icon={() => (<AntDesign name="down" size={20} color="#A0A0B2" />)}
					/>

		
					<RectButton style={styles.button} onPress={handleNavigateToPoints}>
						<View style={styles.buttonIcon}>
							<Text>
								<Icon name="arrow-right" color="#fff" size={24} />
							</Text>
						</View>
						<Text style={styles.buttonText}>
							Entrar
					</Text>
					</RectButton>
				</View>
			</ImageBackground>
		</KeyboardAvoidingView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
	},

	main: {
		flex: 1,
		justifyContent: 'center',
	},

	title: {
		color: '#322153',
		fontSize: 32,
		fontFamily: 'Ubuntu_700Bold',
		maxWidth: 260,
		marginTop: 64,
	},

	description: {
		color: '#6C6C80',
		fontSize: 14,
		marginTop: 16,
		fontFamily: 'Roboto_400Regular',
		maxWidth: 260,
		lineHeight: 24,
	},

	footer: {},

	select: {},

	input: {
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 10,
		marginBottom: 8,
		paddingHorizontal: 24,
		fontSize: 16,
	},

	button: {
		backgroundColor: '#34CB79',
		height: 60,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		alignItems: 'center',
		marginTop: 8,
	},

	buttonIcon: {
		height: 60,
		width: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		justifyContent: 'center',
		alignItems: 'center'
	},

	buttonText: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
		color: '#FFF',
		fontFamily: 'Roboto_500Medium',
		fontSize: 16,
	}
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		...styles.input
	},
	inputAndroid: {
		...styles.input
	},
	iconContainer: {
		top: 20,
		right: 15,
	},
}); 

export default Home;