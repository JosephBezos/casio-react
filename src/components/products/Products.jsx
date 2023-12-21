import phone from "../../assets/img/panel_sgr1.png";
import watch from "../../assets/img/panel_watch_ohne1.png";
import calculator from "../../assets/img/panel_calculator_for_intl1.png";
import piano from "../../assets/img/panel_emi1.png";
import projector from "../../assets/img/panel_projector1.png";
import "./Products.css";

function Products() {

    return (
        <>
            <section className="product">
                <div className="container product-container">
                    <h2 className="product-title">Продукция</h2>
                    <div className="row">
                        <div className="col-lg-3 card">
                            <a href="#" className="card-link">
                                <div className="card-image"><img src={watch}
                                                                 alt="Watch"/>
                                </div>
                                <div className="card-partition"><p>Часы</p></div>
                            </a>
                        </div>
                        <div className="col-lg-3 card">
                            <a href="#" className="card-link">
                                <div className="card-image"><img src={phone} alt="Phone"/></div>
                                <div className="card-partition"><p>Научные и <br/>графические <br/>калькуляторы</p></div>
                            </a>
                        </div>
                        <div className="col-lg-3 card">
                            <a href="#" className="card-link">
                                <div className="card-image"><img src={calculator}
                                                                 alt="Calculator"/>
                                </div>
                                <div className="card-partition"><p>Карманные, <br/>настольные и <br/>печатающие <br/>калькуляторы
                                </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 card">
                            <a href="#" className="card-link">
                                <div className="card-image"><img src={piano} alt="Piano"/></div>
                                <div className="card-partition"><p>Музыкальные <br/>инструменты</p></div>
                            </a>
                        </div>
                        <div className="col-lg-3 card">
                            <a href="#" className="card-link">
                                <div className="card-image"><img src={projector}
                                                                 alt="Projector"/></div>
                                <div className="card-partition"><p>Мультимедийные <br/>проекторы</p></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
);
}

export default Products;