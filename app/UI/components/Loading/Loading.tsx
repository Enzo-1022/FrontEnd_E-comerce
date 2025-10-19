import style from '@/app/UI/Styles/loading.module.css';

export default function Loading() {
    return (
        <div className={style.boxLoading}>
            <span className={style.spanCarregando}>Carregando...</span>
        </div>
    )
}
