export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Empresa",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Vaga",
    width: 230,
  },

  {
    field: "descricao",
    headerName: "Descrição",
    width: 350,
  },

  {
    field: "age",
    headerName: "Aplicados",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    status: "active",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    email: "shankya@gmail.com",
    age: 84,
  },
  {
    id: 2,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Shankya",
    img: "https://play-lh.googleusercontent.com/FSeNTle3VBLxnFmsoaIboQlsr3Lyg5f8urVrqkTvsZvoHg8_hZTqFprRbYmOYPX_C_E=w240-h480",
    email: "Shankya@gmail.com",
    status: "active",
    age: 65,
  },
];
