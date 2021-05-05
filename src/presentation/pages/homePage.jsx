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
                <div className="row">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default HomePage;