/*export default () => (
    <> 
    <center><h2>Página da aluna</h2></center> 
    <br></br>
         <p>A aluna se chama Emmilly Kaythe</p>
    </>
); */

import db from "@/lib/db"
export default async () => {
    const usuario = await db.query("select * from usuario")
return (<>
    <h1> Lista de Alunos </h1>
    <div>
        {usuario.rows.map( a => (<div key={a.id}>{a.nome} faz parte do projeto {a.cargo}</div>))}
    </div>
</>);
}