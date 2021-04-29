const MainFrame = ({Header, NavBar, LeftBar, Body, Footer}) => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <Header/>
            </div>
            <div className="row">
                <NavBar/>
            </div>
            <div className="row">
                <div className="col-3">
                   <LeftBar/>
                </div>
                <div className="col-6">
                    <Body/>
                </div>
                <div className="col-3">
                    
                </div>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default MainFrame;