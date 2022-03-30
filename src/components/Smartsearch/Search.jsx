import { useEffect, useState } from "react";
import Table from "./Table";

// function Search() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/////////////////////SEARCH ON A DATATABLE

const people = [
  {
  "name": "Hp Deskjet 3322",
  "id": 1,
        "parts": [ {
        "name": "Cartridge A192",
        "price": 0,
        "id": 1,
        "compatibility": "Hp Deskjet 3322",
        "consumables": [ {
                "name": "Toner Japan Made",
                "price": 3,
                "id": 1,
                "compatibility": "Cartridge A192"}]}]},
  {
  "name": "Hp Deskjet 1606N",
  "id": 2,
        "parts": []
        },
        {
        "name": "String",
        "id": 3,
        "parts": []
        },
        {
  "name": "Мфу Hp 2090Bn",
  "id": 4,
        "parts": []
        }
        ]

export default function Search() {
  const [userdata, setUserData] = useState(people);
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("");
  const keys = ["name"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
    fetch(`http://62.113.99.92:8000/equipments?skip=0`)
          .then(response => response.json())
          .then(data => (setUserData(data)));
  }, []);
  
  // console.log(userdata.length);
  // const numofparts = userdata[0].parts.length
  // console.log(numofparts)

return (
  <div className='px-2 md:px-10 py-2 md:py-7 rounded-tl-lg rounded-tr-lg'>
      <input
        className=" bg-gray-100 text-center w-full h-11 text-xl rounded-lg text-red-900"
        placeholder="Введите название..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(userdata)} />}
  </div>
);
}


//////////////////// Test version for invisble search by Xan

// function Search() {
//   const [query, setQuery] = useState(1);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://62.113.99.92:8000/equipments?skip=0&limit=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Введите данные..."
//           onChange={(e) => setQuery(e.target.value)}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }


