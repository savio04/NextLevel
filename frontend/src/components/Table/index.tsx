import React, { PropsWithChildren, ReactNode } from 'react'
import { Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core'


function Tables({children}:PropsWithChildren<ReactNode>){
    return(
        <Table size="small" stickyHeader >
        <TableHead>
            <TableRow className="table-head" >
                <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}} align="center"><span>Nome</span></TableCell>
                <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}} align="center"><span>Numeros de Aulas</span></TableCell>
                <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}} align="center"><span>Data de criação</span></TableCell>
                <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}}align="center"><span>Editar</span></TableCell>
                <TableCell style = {{fontWeight: 'bold', fontSize:'1.2rem'}}align="center"><span>Remover</span></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {children}
        </TableBody>
    </Table >
    )
}

export default Tables