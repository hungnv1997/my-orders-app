import React, { useState } from "react";
import AddFileOrders from "./AddFileOrders";
import Table from "./Table";

function LazOrders() {
    const [data, setData] = useState([]);
    return (
        <div className="container flex-column d-flex justify-content-center align-item-center">
            <AddFileOrders setData={setData} />
            <Table data={data} />
        </div>
    );
}

export default LazOrders;
