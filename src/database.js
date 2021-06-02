import MongoClient from 'mongodb';

export async function connect() {
	try{
		const client = await MongoClient.connect('mongodb+srv://usplume:usplume@cluster0.mms5n.mongodb.net/DatosPlume?retryWrites=true&w=majority', {
			useUnifiedTopology: true
		})
		const db = client.db('DatosPlume')
		console.log('DB is connected!')
		return db;
	} catch(e) {
		console.log(e);
	}
	
}