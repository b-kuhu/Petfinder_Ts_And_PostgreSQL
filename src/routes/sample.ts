import express from 'express';
import {controllers} from './controllers/animals';

const router = express.Router();

router.post('/animal-shelter/create', controllers.handleAnimals);

