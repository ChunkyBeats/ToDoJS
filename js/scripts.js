$(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();

    var toDoList = {tasks: []}, completed = {tasks: []};

    $("input[name='task']").each(function() {
      toDoList.tasks.push($(this).val());
    });

    toDoList.tasks.forEach(function(task) {
      $("ul.todo").append("<li class='done'>"+ task + "</li>");
      $(".done").last().click(function() {
        var moveTask = toDoList.tasks[toDoList.tasks.indexOf($(this).text())];
        toDoList.tasks.slice(moveTask, 1);
        completed.tasks.push(moveTask);
        $(this).remove();
        $("ul.completed").append("<li>"+ completed.tasks[completed.tasks.length - 1] + "</li>");
      });
    });


    // $(".done").last().click(function() {
    //   $("ul.completed").append("<li>" + $(this).text() + "</li>");
    //   $(this).remove();
    // });

    $("input#task").val("");
  });


  $("#addMoreTasks").click(function() {
    $(".form-container").append('<div class="form-group"><input name="task" id="task" type="text" class="form-control"></div>');
  });
});
