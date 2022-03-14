import React, { Fragment, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Label, Button } from 'reactstrap';

const GraphPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const date = searchParams.get('date');

    return (
        <Fragment>
            <h1>Graphs</h1>
            <Label>{date}</Label>
            <Button onClick={() => setSearchParams('date=1')}>1</Button>
            <Button onClick={() => setSearchParams('date=2')}>2</Button>
            <Button onClick={() => setSearchParams('date=3')}>3</Button>
        </Fragment>
    );
};

export default GraphPage;
