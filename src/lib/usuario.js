import db from './db';

export async function getusuarios() {
        const result = await db.query('SELECT * FROM usuario');
    return result.rows;
}
        
//comunicação com o banco de dados
// se tirar o await => da errado pois a conexão é lenta, logo o await manda esperar a consulta chegar para isso precisamos falar que a funsão é assíncrona  
//rows é as tuplas retornadas 