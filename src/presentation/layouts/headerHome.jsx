const HeaderHome = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{height: "60px", backgroundColor: "rgba(0,0,0,0.1)"}}>
                    <div className="col-1 offset-2 bg-warning">Logo</div>
                    
                    <div className="col-1 offset-5 bg-primary">Login</div>
                </div>
            </div>
        </>
    );
}

export default HeaderHome;