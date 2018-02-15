import React from 'react';

export default (props) => {

    return <tr>
        <th scope="row">{props.id}</th>
        <td>{props.title}</td>
        <td>{props.username}</td>
        <td>{props.type ? 'Road' : 'Mountain'}</td>
    </tr>

};