import React, {Fragment} from 'react'
import classes from './home-content.module.css';


const HomeBlog = (props) => {
    return (
        <Fragment>
            <div className={classes.homeblog__title}>
                <h2>Featured Blog Posts</h2>
            </div>
            <div className={classes.homeblog__posts}>
            </div>
        </Fragment>
    )
}



export default HomeBlog;
