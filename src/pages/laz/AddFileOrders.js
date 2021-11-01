import React, { useState } from "react";
import * as XLSX from "xlsx";
function AddFileOrders({ setData }) {
    const [items, setItems] = useState([]);

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setData(d);
            console.log(d);
        });
    };
    const onChangeFileInput = (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        readExcel(file);
    };
    return (
        <>
            <form className="g-2 my-5 p-3 align-self-center border rounded col-8 d-flex flex-column justify-content-center align-item-center">
                <div className="mb-3">
                    <label className="form-label"></label>
                    <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={onChangeFileInput}
                    />
                </div>
                <div className="col-auto align-self-end">
                    <button type="submit" className="btn btn-primary mb-3">
                        Tải lên
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddFileOrders;
