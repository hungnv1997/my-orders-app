import MaterialTable from "material-table";
import React, { useState } from "react";
// import { tableIcons } from "../../icon/icon";

function Table({ data }) {
    const [selectedRow, setSelectedRow] = useState(null);
    return (
        <div>
            <MaterialTable
                // icons={tableIcons}
                title="Lazada"
                columns={[
                    { title: "Mã đơn hàng", field: "orderNumber" },
                    { title: "Thời gian tạo", field: "createTime" },
                    { title: "Thời gian update", field: "updateTime" },
                    {
                        title: "Giá sản phẩm",
                        field: "unitPrice",
                    },
                    {
                        title: "Tên sản phẩm",
                        field: "itemName",
                    },
                    {
                        title: "Mã vận đơn",
                        field: "trackingCode",
                    },
                    {
                        title: "Trạng thái",
                        field: "status",
                        lookup: {
                            pending: "Chờ xác nhận",
                            canceled: "Đã hủy",
                            packed: "Đã xác nhận",
                            shipped: "Đã giao cho vận chuyển",
                            ready_to_ship: "Chờ bàn giao",
                            delivered: "Đã giao hàng",
                            shipped_back: "Đang trả hàng",
                            failed_delivery: "Giao không thành công",
                            shipped_back_success: "Đã trả hàng",
                            lost_by_3pl: "Mất hàng",
                        },
                    },
                ]}
                data={data}
                // data={[
                //     {
                //         orderNumber: 1545456,
                //         createTime: "01 Nov 2021 12:03",
                //         updateTime: "01 Nov 2021 12:03",

                //         unitPrice: 1987,
                //         itemName: 63,
                //         trackingCode: "1454f5asFD",
                //         status: "pending",
                //     },
                //     {
                //         orderNumber: 1545456,
                //         createTime: "01 Nov 2021 12:03",
                //         updateTime: "01 Nov 2028 12:03",

                //         unitPrice: 1987,
                //         itemName: 63,
                //         trackingCode: "1454f5asFD",
                //         status: "pending",
                //     },
                //     {
                //         orderNumber: 1545456,
                //         createTime: "01 Nov 2021 12:03",
                //         updateTime: "01 Nov 2020 12:03",

                //         unitPrice: 1987,
                //         itemName: 63,
                //         trackingCode: "1454f5asFD",
                //         status: "pending",
                //         shippingName: "a T",
                //         customerName: "ầdsaf",
                //         billingName: "Nguyễn Văn A",
                //         billingPhone: "0379471370",
                //         billingAddr: "tổ 1",
                //         shippingAddress5: "xã 55",
                //         shippingAddress4: "Huyện Bc",
                //         shippingAddress3: "Hà Nội",
                //     },
                // ]}
                onRowClick={(evt, selectedRow) =>
                    setSelectedRow(selectedRow.tableData.id)
                }
                options={{
                    filtering: true,
                    search: true,
                    exportButton: true,
                    rowStyle: (rowData) => ({
                        backgroundColor:
                            selectedRow === rowData.tableData.id
                                ? "#EEE"
                                : "#FFF",
                    }),
                }}
                detailPanel={[
                    {
                        tooltip: "Xem khách hàng",
                        render: (rowData) => {
                            return (
                                <div
                                // style={{
                                //     fontSize: 100,
                                //     textAlign: "center",
                                //     color: "white",
                                //     backgroundColor: "#43A047",
                                // }}
                                >
                                    <div className="row g-3 ">
                                        <div className="row__customer-info col-md-5 p-3 m-3">
                                            <h4>Thông tin khách hàng</h4>
                                            <h6>Tên: {rowData.shippingName}</h6>
                                            <h6>Id: {rowData.customerName}</h6>
                                        </div>
                                        <div className="row__customer-address col-md-5 p-3">
                                            <div className="row-customer-address__title d-flex justify-content-between">
                                                <h4>Địa chỉ:</h4>{" "}
                                                {/* <button className="btn btn-danger btn-sm"></button> */}
                                            </div>
                                            <div className="row-customer-address__detail">
                                                <h6>
                                                    Tên người nhận:{" "}
                                                    {rowData.billingName}
                                                </h6>
                                                <h6>
                                                    Số điện thoại:{" "}
                                                    {rowData.billingPhone}
                                                </h6>
                                                <h6>
                                                    Địa chỉ:{" "}
                                                    {rowData.billingAddr +
                                                        " " +
                                                        rowData.shippingAddress5 +
                                                        " " +
                                                        rowData.shippingAddress4 +
                                                        " " +
                                                        rowData.shippingAddress3}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        },
                    },
                ]}
            />
        </div>
    );
}

export default Table;
