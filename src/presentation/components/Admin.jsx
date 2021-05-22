import React, { useEffect, useState } from "react";
import { Card, CardBody, Container } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import logo from "../../data/weatherImgs/logo.png";
import linkHome from "../../data/api/linkHome";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Footer from "../layouts/footer";
import { connect } from "react-redux";
import { getListUsersRequest } from "../redux/effects/listUsersEffect";
import { bindActionCreators } from "redux";

const tableColumns = [
  {
    dataField: "id",
    text: "ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Name",
    sort: true
  },

  {
    dataField: "email",
    text: "Email",
    sort: true
  },
  {
    dataField: "loginDate",
    text: "RegistedTime",
    sort: true
  },
];
const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const Admin = ({ propsAdmin, propsListUsers, getListUsersRequest }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const emailAdmin = localStorage.getItem("emailAdmin");
    const password = localStorage.getItem("token");
    if (!!emailAdmin && !!password) {
      getListUsersRequest(emailAdmin, password)
    };
    if (propsListUsers.success == 1) {
      // config ID User 
      const listUsers = propsListUsers.data.listUsers;
      const list = [];
      for (let i = 0; i < listUsers.length; i++) {
        const item = listUsers[i];
        const newItem = {
          ...item,
          id: i+1,
        }
        list.push(newItem);
      }
      setTableData(list);
    }
  }, [propsListUsers.success])


  return (
    <>
      <div className="row" style={{ height: 610 }}>
        <div className="col-2" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#7a6c7d" }}>
          <div>
            <div style={{ textAlign: "center", height: 80, borderBlockColor: "Highlight" }}>
              <a href={linkHome}>
                <img src={logo} width="73" alt="Logo" />
              </a>
            </div>
                  <div className="text-center" style={{ color: "white",marginTop:40,backgroundColor:"Highlight",width:217,height:40}}>USER</div>
          </div>
          <div style={{ color: "white", height: 50, width: 186, marginLeft: 70 }}>
            <button className="btn btn-primary">LOG OUT</button>
          </div>
        </div>
        <div className="col-10">
              <Container fluid className="p-0">
                  <h3 style={{ marginTop: 30 }}><i class="fa fa-list" aria-hidden="true"></i> LIST USER</h3>
                <Card>
                  <CardBody>
                    <BootstrapTable
                      keyField="name"
                      headerWrapperClasses="foo"
                      data={tableData}
                      bootstrap4
                      columns={tableColumns}
                      defaultSorted={defaultSorted}
                      hover
                      bordered
                      pagination={paginationFactory({
                        sizePerPage: 10
                      })}
                    />
                  </CardBody>
                </Card>
              </Container>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    propsListUsers: state.listUsersReducer,
    propsAdmin: state.loginAdminReducer,
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getListUsersRequest,
},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Admin);