
const MainBody = ({children}) => {
    return (
        <>
        <div className="container-fluid" style={{position: "absolute", top: "116px"}}>
            <div className="row">
                <div className="col-8 offset-2" style={{backgroundColor: "green"}}>
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}

export default MainBody;