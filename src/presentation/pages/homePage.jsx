const HomePage = ({ Header, Footer, HomeBody }) =>
{
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <HomeBody />
                </div>
            </div>
            <div className="row fixed-bottom">
                    <Footer />
                </div>
        </>
    );
}

export default HomePage;