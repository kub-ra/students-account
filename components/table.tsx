import React from "react";
import Image from "next/image";
import pen from "../src/assets/svgs/pen 1.svg";
import trash from "../src/assets/svgs/trash 1.svg";

interface TableProps {
  data: {
    id: number;
    firstName: string;
    email: string;
    phone: string;

    domain: string;
    image: string;
    company: any;
  }[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ data, onDelete, onEdit }) => {
  console.log(data, "data");
  return (
    <table className=" w-11/12">
      <thead>
        <tr className="text-gray-second text-xs font-semibold h-14">
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className="rounded-lg h-20 bg-white " key={item.id}>
            <td className="flex justify-center">
              <Image src={item.image} width={65} alt="image" height={55} />
            </td>
            <td className="text-center">{item.firstName}</td>
            <td className="text-center">{item.email}</td>
            <td className="text-center">{item.phone}</td>
            <td className="text-center">{item.domain}</td>
            <td className="text-center">{item.company?.title}</td>
            <td className="text-center">
              <button onClick={() => onEdit(item.id)}>
                <Image src={pen} width={19} height={19} alt="edit" />
              </button>
              <button onClick={() => onDelete(item.id)}>
                <Image src={trash} width={19} height={19} alt="edit" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
