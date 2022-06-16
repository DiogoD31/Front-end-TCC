import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";

const Single = () => {

  const data = [{
    id: 1,
    cargo: "DEV Java JR",
    empresa: "Shankya",
    descricao: "descrição toda sobre a vaga informado a cima",
    salario: "R$ 2000.00",
  }];

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {data.map((row) => (
            <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Informação da Vaga</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{row.cargo}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
