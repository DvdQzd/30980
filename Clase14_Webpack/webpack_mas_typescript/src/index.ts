import express from 'express';
const app = express();
const PORT = 8080;
import { Persona } from './lib/clase';
import { getTime } from './lib/time';

const persona = new Persona('cosme', 'fulanito');

app.get('/', (req, res) => {
    const result = `{ timeES6: ${JSON.stringify(getTime())}, fullNameTS: ${persona.getFullName()}}`
    res.status(200).send(result);
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});