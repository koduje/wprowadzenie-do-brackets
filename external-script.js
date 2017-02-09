var checkIfFinished = function () {
  var totalTasks = document.querySelectorAll('.agenda li'),
      finishedTasks = document.querySelectorAll('.agenda input:checked');
  
    alert("Omówiono " + finishedTasks.length + "/" + totalTasks.length + " zagadnień");
};