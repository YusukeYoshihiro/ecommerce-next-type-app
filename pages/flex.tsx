import style from "./flex.module.css"

const flex = () => {
    return (
        <div className={style.parent}>
            <div className={style.child}></div>
            <div className={style.child}></div>
            <div className={style.child}></div>
            <div className={style.child}></div>
        </div>
    )
}

export default flex