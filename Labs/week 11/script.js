$(document).ready(function() {

    // Function to create and append table row
    function createTableRow(lang) {
      var row = $('<tr>');
      row.append('<td>' + lang.name + '</td>');
      row.append('<td>' + lang.code + '</td>');
      $('#languageTable tbody').append(row);
    }
  
    // AJAX request to fetch language data
    $.ajax({
      url: "languages.json",
      dataType: "json",
      success: function(data) {
        // Loop through each language object in the data
        $.each(data, function(index, lang) {
          createTableRow(lang);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching data:", textStatus, errorThrown);
      }
    });
  });
  