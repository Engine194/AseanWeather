
const MainBody = ({children}) => {
    return (
        <>
        <div className="container-fluid" style={{position: "absolute", top: "94px"}}>
            <div className="row">
                <div className="col-6 offset-3" style={{backgroundColor: "rgba(235,235,235,1)"}}>
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}

export default MainBody;