import classes from "./Logo.module.css"
import logo2 from "./../../assets/images/logo2.png"

function Logo2(){
    return(
        <div className={classes.logoContainer}>
            <div className={classes.img}><img src={logo2} className={classes.logoimg}/></div>
            <div className={classes.text}>Ume</div>
        </div>
    )
}

export default Logo2;