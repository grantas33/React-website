import React from 'react';

export default (props) => {

        return (
            <div>
                <li className="list-group-item">
                    {props.title}
                    {props.username}
                    {props.type}
                </li>
            </div>
        )
};