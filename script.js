function clear_btns(id="") {
    var bttns = document.getElementsByClassName("_form-control")
    
    if (id == "") {
        for (let i = 0; i < bttns.length; i++) {
    
            bttns[i].value = ""
        }

    } else {
        
        for (let i = 0; i < bttns.length; i++) {
            if (bttns[i].ariaLabel != id) {
                bttns[i].value = ""
            }
        }

    }


}

function search_on_table(criteria_type) {

    var cols = {
        "name_search_btn":1,
        "email_search_btn":2,
        "sku_search_btn":6
    }

    var c_types = {
        "name_search_btn":"name-formcontrol",
        "email_search_btn":"email-formcontrol",
        "sku_search_btn":"sku-formcontrol"
    }

    clear_btns(id=criteria_type)
    var table = document.getElementById("sales-list")
    var search_criteria = document.getElementById(c_types[criteria_type])

    
    var rows = table.children[1].children[1]

    var table_len = table.getElementsByTagName("tr").length - 1

    for (let i = 0; i < table_len; i++) {
        var tmp_row_data = rows.children[i].children[cols[criteria_type]]
        var cell_content = tmp_row_data.innerHTML
        var filter = search_criteria.value
        if (!!cell_content.toUpperCase().indexOf(filter.toUpperCase())) {
            table.children[1].children[1].children[i].style.display = 'none'
        }
    }
    
    // for (i = 0; i < table_len; i++) {
    //     td = tr[i].getElementsByTagName("td")[0];
    //     if (td) {
    //       txtValue = td.textContent || td.innerText;
    //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         tr[i].style.display = "";
    //       } else {
    //         tr[i].style.display = "none";
    //       }
    //     }
    //   }
}

function showCell() {
    clear_btns(id="")

    var table = document.getElementById("sales-list")
    var rows = table.children[1].children[1]

    var table_len = table.getElementsByTagName("tr").length - 1

    for (let i = 0; i < table_len; i++) {
        var tmp_row_data = rows.children[i].children[i]
        table.children[1].children[1].children[i].style.display = 'table-row'
    }
}