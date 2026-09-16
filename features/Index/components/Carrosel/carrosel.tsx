export default function Carrosel({imgSrc}:{imgSrc:string[]}) {  
    let contador : number = 0;  
    return(
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                {
                    
                    imgSrc.map( (imagem: string) => {
                        if (contador) {
                            return (
                                <div className="carousel-item" key={imagem}>
                                    <img src={imagem} className="d-block w-100" alt="..."/>
                                </div>
                            )
                        }
                        else{
                            contador++
                            return (
                                <div className="carousel-item active" key={imagem}>
                                    <img src={imagem} className="d-block w-100" alt="..."/>
                                </div>
                            )
                        }
                       
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
