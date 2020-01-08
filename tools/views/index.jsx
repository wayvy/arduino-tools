import React from 'react';
import {App} from './App';

export default ({ port, list, createdAt }) => {
    return (<App port={port} list={list} createdAt={createdAt}/>);
}