
const MainBody = ({children}) => {
    return (
        <>
        <div className="container-fluid" style={{position: "absolute", top: "103px"}}>
            <div className="row" style={{height: "auto"}}>
                <div className="col-8 offset-2" style={{backgroundColor: "green"}}>
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}

export default MainBody;