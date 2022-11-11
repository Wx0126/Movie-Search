
fetch("movies.json")
    .then(response => response.json())


    .then(function(data){
              console.log(data)  //the first part of this code is to get the JSON data from the local file

      function displayWholeMovies() {
        var table = document.getElementById("movieTable");
        for (var i = 0; i < data.length; i++) {
          var movieNew = data[i];
          var tr = document.createElement("tr");
          var addUnit = function(text) {
            var td = document.createElement("td");
            var txt = document.createTextNode(text);
            td.appendChild(txt);
            tr.appendChild(td);
          }
          addUnit(movieNew.year);
          addUnit(movieNew.title);
          addUnit(movieNew.genres);
          addUnit(movieNew.cast);
          table.appendChild(tr);
        }
      }  //this section defines a function that when options are all 'All' it will display all the movies into the table on the browser


      function displayAccordingSelection() {
        var table = document.getElementById("movieTable");
        for (var i = 0; i < data.length; i++) {
          if (parseInt(document.getElementById("selectYearStart").value) <=data[i].year&&data[i].year< parseInt(document.getElementById("selectYearEnd").value)&& JSON.stringify(data[i].genres).includes(document.getElementById("selectGenre").value) ){
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          } else if (document.getElementById("selectYearStart").value == "All" && data[i].year< parseInt(document.getElementById("selectYearEnd").value) && JSON.stringify(data[i].genres).includes(document.getElementById("selectGenre").value) ) {
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          } else if (parseInt(document.getElementById("selectYearStart").value) <=data[i].year&&document.getElementById("selectYearEnd").value=='All' && JSON.stringify(data[i].genres).includes(document.getElementById("selectGenre").value) ) {
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          } else if (document.getElementById("selectYearStart").value =='All'&& document.getElementById("selectYearEnd").value == 'All' && JSON.stringify(data[i].genres).includes(document.getElementById("selectGenre").value)) {
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          } else if (document.getElementById("selectYearStart").value =='All'&& data[i].year<=parseInt(document.getElementById("selectYearEnd").value)&& document.getElementById("selectGenre").value=="All") {
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          }else if (parseInt(document.getElementById("selectYearStart").value)<=data[i].year&& document.getElementById("selectYearEnd").value=='All'&& document.getElementById("selectGenre").value=="All") {
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          }else if (parseInt(document.getElementById("selectYearStart").value) <= data[i].year && parseInt(document.getElementById("selectYearEnd").value)>= data[i].year && document.getElementById("selectGenre").value == "All") {
            var movieNew = data[i];
            var tr = document.createElement("tr");
            var addUnit = function(text) {
              var td = document.createElement("td");
              var txt = document.createTextNode(text);
              td.appendChild(txt);
              tr.appendChild(td);
            }
            addUnit(movieNew.year);
            addUnit(movieNew.title);
            addUnit(movieNew.genres);
            addUnit(movieNew.cast);
            table.appendChild(tr);
          } 
        }
      }; // In this section the function is to display according the condition of several possbilities.


      function userSelectingBar() {
        clearAll();
        var table = document.getElementById("selectYearStart");
        var table2 = document.getElementById("selectYearEnd");
        var table3 = document.getElementById("selectGenre");
        if (table.options[table.selectedIndex].value == "All" && table2.options[table2.selectedIndex].value == "All" && table3.options[table3.selectedIndex].value =='All') {
          displayWholeMovies();
        } else {
          displayAccordingSelection();
        }
      } //it will fresh the table content before the next display, besides if all options are "All" the displayWholeMovies being called


      function initialize() {
        document.getElementById("click").onclick = userSelectingBar; 
      } //by clicking on the go button the function userSelectingBar being called


      function clearAll() {
        var tableAlter = document.getElementById('movieTable');
        var rowSum = tableAlter.rows.length;
        for (var i = rowSum - 1; i > 0; i--) {
          tableAlter.deleteRow(i);
        }
      }

      window.onload = initialize(); //it is the start point of this web page

    });







