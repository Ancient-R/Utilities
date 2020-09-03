import React, { useState, useRef, useEffect } from 'react';

// css
import './Table.css';

const Table = () => {

    // referencia a la tabla con useRef 'equivalente a document.getElementBy
    const tableRef = useRef();
    
    // state del input de búsqueda
    const  [ search, setSearch ] = useState('');

    const handleInputChange = e => {
        setSearch( e.target.value );
    }

    // función de búsqueda
    const handleSearch = e => {
        e.preventDefault();
        const rows = tableRef.current.rows;

        for( let i = 1; i < rows.length; i ++ ){
            if( rows[i].innerText.includes( search )){
                rows[i].classList.add('show');

            }else{
                rows[i].classList.add('hide');
            }
        }
    }

    
    // useEffect para reestrablecer la tabla cada que se borra todo el contenido a buscar
    useEffect( () => {
        const rows = tableRef.current.rows;
        for( let j = 1; j < rows.length; j ++ ){
            
            if( rows[j].className.includes('show') ){
                rows[j].classList.remove('show');
            }else{
                rows[j].classList.remove('hide');
            }
        }

        // eslint-disable-next-line
    }, [ search ]);


    // Arreglo de usuarios `Puede sustituir esta información por una real desde una DB`
    const users = [
        { id: 123, name: 'María', username: 'maria-785', email: 'maria@correo.com' },
        { id: 123, name: 'Raquel', username: 'Raquelita873', email: 'raquel@correo.com' },
        { id: 123, name: 'Pablo', username: 'pablo799', email: 'pablo@correo.com' },
        { id: 123, name: 'Martín', username: 'Mar-6-tin', email: ',martin@correo.com' }
    ]

    return (
            <div className="table-container">
                <form className="table-search"
                    onSubmit={ handleSearch }
                >
                    <input 
                        type="text" 
                        className="form-input"
                        placeholder="Búsqueda de Usuario"
                        autoComplete="off"
                        name="search"
                        value={ search }
                        onChange={ handleInputChange }
                    />
                    <i className="fas fa-search input-icon"></i>
                </form>
                <table className="table"
                ref={ tableRef }>

                    <thead>
                        <tr className="table-row">
                            <th className="head-row">Titulo 1</th>
                            <th className="head-row">Titulo 2</th>
                            <th className="head-row">Titulo 3</th>
                            <th className="head-row">Titulo 4</th>
                        </tr>
                    </thead>

                    <tbody>
                        { users.map( user => (
                            <tr className="table-row">
                                <td className="body-row">{ user.id }</td>
                                <td className="body-row">{ user.name }</td>
                                <td className="body-row">{ user.username }</td>
                                <td className="body-row">{ user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Table;