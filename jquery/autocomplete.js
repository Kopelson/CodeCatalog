/**
 * This ajax request is expecting data json to populate a list of selectable items for the input field.
 */

// autocomplete framework
$(function () {
    $('#idOfInputField').autocomplete({
        source: function (request, response) {
            jsondata = {
                input:"input"
            }
            jQuery.extend(jsondata, {'search': request.term.replace('.','\\.')});
            $.ajax({
                type: "POST",
                url: "ajax_autocompleteSearch.php",
                data: jsondata,
                success: response,
                dataType: 'json',
                minLength: 2,
                delay: 100
            });
        },
        select: function(event, ui) { 
            var prod = ui.item.label.substr(0,ui.item.label.indexOf(' '))
            $("#idOfInputField").val(prod);
        }
    });
});

/**
 * Example of data that the ajax_autocompleteSearch.php
    ["Item 1", "Item 2", "Item 3", ...]
 */