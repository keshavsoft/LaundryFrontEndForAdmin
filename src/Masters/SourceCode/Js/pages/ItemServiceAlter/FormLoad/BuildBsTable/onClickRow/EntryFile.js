import { StartFunc as NewOrder } from "./NewOrder/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === 'Orders') {

        Swal.fire({
            title: "NewOrder",
            confirmButtonText: "Yes",
            showDenyButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                NewOrder({ inrowData: row });

            };
        });
    }
};

export { StartFunc };