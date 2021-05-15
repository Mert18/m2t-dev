
import classes from './hero.module.css';
import dynamic from 'next/dynamic'

function Hero() {

    const MyChart = dynamic(
        () => import('../Graph.js'),
        { ssr: false }
      )
    return(
        <div className={classes.hero}>
            <div className={classes.hero__graph}>
                <MyChart />
            </div>
        </div>
    )
}

export default Hero;