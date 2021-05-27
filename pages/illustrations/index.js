import React from 'react';
import classes from './ills.module.css';
import Illustration from '../../components/illustrations/Illustration';
import Head from 'next/head';

const Illustrations = () => {
    return (
        <div className={classes.illustrations}>
            <Head>
                <title>Illustrations</title>
                <meta name="description" content="Adobe Illustrator artworks." />
            </Head>
            <Illustration img="/images/illustrations/kindred.svg" title="Kindred" date="5/27/2021" />
            <Illustration img="/images/illustrations/red-scene.svg" title="Scene Red" date="5/27/2021" />
            <Illustration img="/images/illustrations/tree-circle.svg" title="Tree Circle" date="5/27/2021" />
        </div>
    )
}

export default Illustrations;
