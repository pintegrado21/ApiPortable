import {Router} from 'express'
const router = Router();

import { connect } from '../database'

router.get('/', async (req, res)=> {
	const db = await connect();
	var O3 = parseFloat(req.query.O3);
	var NO2 = parseFloat(req.query.NO2);
	var CO = parseFloat(req.query.CO);
	var Latitud = parseFloat(req.query.LA);
	var Longitud = parseFloat(req.query.LO);
	const task = {
		O3 : parseFloat(req.query.O3),
		NO2 : parseFloat(req.query.NO2),
		CO : parseFloat(req.query.CO),
		Latitud: parseFloat(req.query.LA),
		Longitud: parseFloat(req.query.LO),
		fecha : new Date()
	};
	const result = await db.collection('portable').insertOne(task);
	res.send('Data inserted correctly!');
})

/*
router.get('/b', async (req, res)=> {
	const db = await connect();
	const task = {
		O3 : parseFloat(req.query.O3),
		NO2 : parseFloat(req.query.NO2),
		CO : parseFloat(req.query.CO),
		fecha : new Date()
	};
	const result = await db.collection('portable').insertOne(task);
	res.send('Data inserted correctly!');
})
*/

router.get('/b', async (req, res)=> {
	const db = await connect();
	const task = {
		O3 : parseFloat(req.query.O3),
		NO2 : parseFloat(req.query.NO2),
		CO : parseFloat(req.query.CO),
		Latitud: parseFloat(req.query.LA),
		Longitud: parseFloat(req.query.LO),
		fecha : new Date()
	};
	const result = await db.collection('portable').insertOne(task);
	res.send('Data inserted correctly!');
})

//"O3=" + String(ugO3) + "&NO2=" + String(ugNO2)+ "&CO=" + String(mgCO); "&LA=" + String(lat) + "&LO=" + String(lng);

export default router;