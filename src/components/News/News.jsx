import './News.css';

function News() {
    return (
        <>
            <section className="news">
                <div className="container news-container">
                    <h2 className="news-title">Новости</h2>
                    <hr/>
                    <a href="#" className="news-link">
                        <div className="news-item row col-lg-12">
                            <div className="item-heading col-lg-3">01.03.2022</div>
                            <div className="item-body col-lg-8">
                                <strong>G-SHOCK Utility Black</strong>
                                <br/>
                                WITHSTAND WHAT COMES YOUR WAY
                            </div>
                            <span className="material-symbols-outlined grey-icon">chevron_right</span>
                        </div>
                    </a>
                    <hr className="dash"/>
                        <a href="#" className="news-link">
                            <div className="news-item row col-lg-12">
                                <div className="item-heading col-lg-3">01.03.2022</div>
                                <div className="item-body col-lg-8">
                                    <strong>Casio to Release the First MR-G to Feature the Iconic Design of the Original
                                        G-SHOCK</strong>
                                </div>
                                <span className="material-symbols-outlined grey-icon">chevron_right</span>
                            </div>
                        </a>
                        <hr className="dash"/>
                            <a href="#" className="news-link">
                                <div className="news-item row col-lg-12">
                                    <div className="item-heading col-lg-3">24.02.2022</div>
                                    <div className="item-body col-lg-8">
                                        <strong>Casio to Release Standout G-SHOCK in Black Full-Metal Design</strong>
                                        <br/>
                                        Featuring Intricate Combination of Multiple Finishes
                                    </div>
                                    <span className="material-symbols-outlined grey-icon">chevron_right</span>
                                </div>
                            </a>
                            <hr className="dash"/>
                                <a href="#" className="news-link">
                                    <div className="news-item row col-lg-12">
                                        <div className="item-heading col-lg-3">15.02.2022</div>
                                        <div className="item-body col-lg-8">
                                            <strong>Casio to Release PRO TREK with Bio-Mass Plastics</strong>
                                        </div>
                                        <span className="material-symbols-outlined grey-icon">chevron_right</span>
                                    </div>
                                </a>
                                <hr className="dash"/>
                                    <a href="#" className="news-link">
                                        <div className="news-item row col-lg-12">
                                            <div className="item-heading col-lg-3">09.02.2022</div>
                                            <div className="item-body col-lg-8">
                                                <strong>Casio to Release Limited Edition EDIFICE in Nissan &amp; NISMO
                                                    Team Colors</strong>
                                                <br/>
                                                Watch Engraved with Traditional Nissan & NISMO Ace Number, 23
                                            </div>
                                            <span className="material-symbols-outlined grey-icon">chevron_right</span>
                                        </div>
                                    </a>
                                    <hr className="dash"/>
                                        <a href="#" className="news-button">
                                            <span className="material-symbols-outlined blue-icon">chevron_right</span>
                                            <strong>РАЗВЕРНУТЬ</strong>
                                        </a>
                </div>
            </section>
        </>
);
}

export default News;