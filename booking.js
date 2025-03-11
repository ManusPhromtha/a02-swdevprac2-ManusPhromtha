function textCheck() {
    let name = document.getElementById("contact_name");
    let number = document.getElementById("contact_number");
    if (name.value=="" || number.value=="") {
        alert("ชื่อและเบอร์ห้ามเป็นค่าว่าง");
        return false;
    }
    return true;
}

function amountCheck() {
    let amount = document.getElementById("quantity");
    if (amount.value<1 || amount.value>15 || amount=="") {
        alert("จำนวนผู้ร่วมเดินทาง ต้องระหว่าง 1 ถึง 15 คน");
        return false;
    }
    return true;
}

function boxCheck() {
    let mark = document.getElementById("agree");
    if (mark.checked) {
        if (confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่")) {
            alert("คุณเลือกซื้อบัตรโดยสารเครื่องบิน");
        }
    }
    return true;
}

function checkList() {
    if (textCheck() && amountCheck() && boxCheck()) {
        alert("Successfully submitted");
    }
}