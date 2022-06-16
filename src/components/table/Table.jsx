import "./table.scss";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';

const List = () => {
  const rows = [
    {
      id: 1143155,
      empresa: "Shankya",
      img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
      customer: "DEV Java Jr",
      cidade: "Uberlândia",
      amount: 785,
      method: "Cash on Delivery",
    },
    {
      id: 2235235,
      empresa: "NTTData",
      img: "https://partners.infobip.com/images/uploads/partners/ntt-logo%402x_1.png",
      customer: "QA Pleno",
      cidade: "São Paulo",
      amount: 900,
      method: "Online Payment",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">Tracking ID</TableCell> */}
            <TableCell className="tableCell">Empresa</TableCell>
            <TableCell className="tableCell">Vaga</TableCell>
            <TableCell className="tableCell">Cidade</TableCell>
            <TableCell className="tableCell">Candidatos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell className="tableCell">{row.id}</TableCell> */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.empresa}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.cidade}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <Button className="btnView" variant="contained" endIcon={<VisibilityIcon />}>
                  Ver vaga
                </Button>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
