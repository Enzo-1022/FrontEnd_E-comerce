'use client'

import style from '@/app/UI/Styles/notify.module.css'
import { ErroContext } from '@/app/UI/context/erroContext';
import { useContext } from 'react';
// import {warning.png} from '@/public/imgs/warning.png'


export default function NotifyBox() {
    const erro = useContext(ErroContext);

    return(
        <div className={ erro?.notify.Title != undefined? style.boxNotify : style.boxDisable } >
            <div className={style.boxTitle}>
                <div className={style.imgETitle}>
                    <img src='imgs\warning (1).png' alt="warning" className={style.img}/>
                    <h5 className={style.marginZero}>{erro?.notify.Title}</h5>
                </div>
                <button className={style.button} onClick={
                    () => {
                        erro?.setNotify({Title : undefined, Messege: undefined});
                    }
                }> X </button>
            </div>
            
            <p className={style.marginZero}>{erro?.notify.Messege}</p>

        </div>
    );
}
